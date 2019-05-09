const AWS = require('aws-sdk'); 
const mailer = require("./mailer");
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

AWS.config.update({region: 'eu-west-1'});

app.post('/api/contact', (req, res, next) => {
  return mailer.sendMail('shauncollins774@gmail.com', ['reciever@email.com'], req.body)
    .then(() => res.send(req.body))
    .catch(next);
});

app.listen(port, () => console.log(`Listening on port ${port}`));