import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "divyanshumishra9580@gmail.com",
      pass: "rbkq ftad uedb zsvo",
    },
  });

  
  const sendEmail=async(email,verificationCode)=>{
    try {
        const info = await transporter.sendMail({
            from: '"say hello 👻" <divyanshumishra9580@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify your email", // Subject line
            text: "", // plain text body
            html: `<b>your verification code is ${verificationCode}</b>`, // html body
          });
          //console.log("info",info)
          return info
    } catch (error) {
        console.log("error while sending email",error)
        return
    }
  }

export {sendEmail}