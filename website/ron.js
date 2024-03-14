const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail',
//    auth: {
//        user: 'your-email@gmail.com', // Your Gmail email address
//        pass: 'your-password', // Your Gmail password
//    },
});

const mailOptions = {
    from: 'me@glossary', // Sender's email address
    to: 'ron.jobmann@suny.edu', // Recipient's email address
    subject: 'Test Email from Nodemailer',
    text: 'Hello from Nodemailer! This is a test email.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});

