const express = require('express');
const app = express();

app.use(require('./build.js'));

app.listen("sftp://ssh.strato.de", () => console.log(`Ready to compile and serve bundle.js`));
