var app = require('express')();

app.get('/email', function (req,res){
    res.sendFile(__dirname+'/email.html')
});

app.post('/email',function (req,res){
    console.log(req.headers['body']);
    let Email = JSON.parse(req.headers['body']).mail
    let Message = JSON.parse(req.headers['body']).mes
    sendemail(Email,Message);
})

require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "coachkurswork@gmail.com",
        pass: "Denis2003"
    }
})

function sendemail(email,text) // Функция отправка данных на почту
{
    const mailOptions ={
        from: 'coachkurswork@gmail.com',
        to: 'egorka004@inbox.ru' ,
        subject: 'Отзыв от '+email,
        text: "Отзыв:"+text
    }
    transporter.sendMail(mailOptions)
    console.log("mes was sent")
}

var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server is work");
})

