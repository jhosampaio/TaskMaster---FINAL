const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  module.exports = transporter