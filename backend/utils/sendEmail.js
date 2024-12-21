//utility to send emails(e.g., notification)
// import nodemailer from 'nodemailer';

// const sendEmail = async (to, subject, text) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',  // You can use other services like SendGrid or Mailgun
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to,
//         subject,
//         text,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//     } catch (error) {
//         console.error('Email send failed: ', error);
//     }
// };

// export {sendEmail};
