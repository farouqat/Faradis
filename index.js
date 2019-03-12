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

    const htmlEmail =`
    <h3>Contact Details</h3>
    <ul>
    <li>First: ${req.body.first}</li>
    <li>Last: ${req.body.last}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    <li>Number of passengers: ${req.body.numberOfPassengers}</li>
    <li>Date from: ${req.body.dateFrom}</li>
    <li>Date to: ${req.body.dateTo}</li>
    </ul>
    <h3>Message: ${req.body.message}</h3>`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'faradis.travels@gmail.com',
            pass: 'Faradis-travel0'
        }
    });

    const mailOptions = {
        from: 'faradis.travels@gmail.com',
        to: 'info@faradistravel.de',
        subject: 'new message',
        text: req.body.message,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        return res.json(info);
    });
});


if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'sftp://ssh.strato.de'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen('sftp://ssh.strato.de', function() {
    console.log("I'm listening.");
});
