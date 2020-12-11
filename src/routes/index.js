const { Router } = require('express')
const nodemailer = require("nodemailer");
const router = Router()

router.post('/send-email', async(req, res)=>{
    const {email, message} = req.body;
    contentHTML = `
        <h1>Enviado desde Web Portafolio</h1>
        <h3>DE: ${email}</h3>
        <b>DATA: ${message}</b>
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
              user: 'davidjared123@gmail.com', // generated ethereal user
              pass: 'gksctdlllglchfng', // generated ethereal password
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