const nodemailer = require('nodemailer');



module.exports = sendMail = async (to, content) => {
    const testAccount = await nodemailer.createTestAccount();
    const credentials = {
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    }
    const transporter = nodemailer.createTransport(credentials);

    const contacts = {
        from: process.env.MAIL_USER,
        to: to
    }

    const email = Object.assign({}, content, contacts);

    await transporter.sendMail(email);
 }

