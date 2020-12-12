const { Router } = require('express')
const nodemailer = require("nodemailer");
const router = Router()
require('dotenv').config();

// console.log(process.env.PASSWORD);
// console.log(process.env.EMAIL);

router.post('/send-email', async(req, res)=>{
    const {email, message} = req.body;
    contentHTML = `
        <h1>Enviado desde Web Portafolio</h1>
        <h3>DE: ${email}</h3>
        <b>MENSAJE: ${message}</b>
        <br />
        <br />
        <br />
        <img src="https://media.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.gif"
         alt="Celebracion Messi">
         
    `
    
        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.gmail',
            // port: 465,
            // secure: false, // true for 465, false for other ports
            service: 'gmail',
            auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.PASSWORD, // generated ethereal password
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          let mailOptions = {
            from: `ADMIN David ${email}`,
            to: 'davidjared123@gmail.com',
            subject: `${email} desde el Portafolio`,
            html: contentHTML
          }
    
          const info = await transporter.sendMail( mailOptions, function (err, data) {
            try {
              console.log("FUNCIONA")
              res.redirect('./success.html')
            } catch (error) {
              console.log('Error')
            }
          });

          // console.log('Message Info', info.messageId)
          
           
    })


module.exports = router