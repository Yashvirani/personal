const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:false,
  auth: {
    user: 'viraniyash2001@gmail.com', // your email address to send email from
    pass: 'yashk123' // your gmail account password
  },
  tls:{
      rejectUnauthorized:false
  }
});

module.exports = transporter;