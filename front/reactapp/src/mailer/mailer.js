require('dotenv').config()
const nodemailer=require('nodemailer')


const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

const mailOptions={
    from:'egorka004@inbox.ru',
    to:'egorka004@inbox.ru',
    subject:'Hello there',
    text:'Hello there'
}

transporter.sendMail(mailOptions)