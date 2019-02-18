const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(compression());

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.post('/api/form', (req,res) => {
    console.log("got a request", req.body);
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail =`
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`;

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'k32sbbfzk65hczoh@ethereal.email',
                pass: 'uTcBQsxyZ8kp1Y3chm'
            }
        });
        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'k32sbbfzk65hczoh@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'new message',
            text: req.body.message,
            html: htmlEmail
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log("Message sent: %s ", info.message );
            console.log("Messasge url: %s", nodemailer.getTestMessageUrl(info));
        });
    });
});


if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
