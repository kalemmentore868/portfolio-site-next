import nodemailer from "nodemailer"
import Joi from "joi"

const schema = Joi.object().keys({
  email: Joi.string().trim().email().email(),
  firstname: Joi.string().trim().required(),
  lastname: Joi.string().trim().required(),
  message: Joi.string().trim().required().max(700),
  phone: Joi.string()
})



export default async (req, res) => {

  const { error, value } = schema.validate(req.body);

  if(error){
    console.log(error.message)
    res.send(error.message)
  } else{
    const {firstname, lastname, email, message, phone} = req.body;
    console.log(process.env.pleasework)
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "kalemmalek123@gmail.com", // generated ethereal user
        pass: "hfvbjduglzilxozy", // generated ethereal password
      },
    });
  
    try {
      const emailRes = await transporter.sendMail({
        from: email,
        to: "kalemmalek123@gmail.com",
        subject: `Client ${firstname} ${lastname} is interested`,
        html: `<p>You have a new contact forn submission</p><br>
        <p><strong>Name: </strong> ${firstname} ${lastname}</p><br>
        <p><strong>Phone: </strong> ${phone}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
        
        `
      })
  
      console.log("message sent", emailRes.messageId)
    } catch (error) {
      console.log(error)
    }
  
    res.status(200).json(req.body)
  }


 
}