import nodemailer from "nodemailer"

const mail = async (req, res) => {

  const message = {
    to: [req.body.email],
    from: process.env.GMAIL_EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.message,
    html: `
<body style="padding: 20px;">
    <p style="text-align: left; font-size: 20px;">Hello ${req.body.fullname}</p>
    <p style="text-align: let; font-size: 20px;">" ${req.body.message} "</p>
    <hr>
    <p style="text-align: center; font-size: large;">Your message above received successfully</p>
    <p style="text-align: left; font-size: 16px; opacity: 70%;">Thank you for contacting <span><a href="https://sharp-valley.vercel.app">Sharp Valley</a></span>. we will come back to you.</p>
</body>

`,
  };

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    }
  });

  if (req.method == 'POST') {
    await transporter.sendMail(message, function (err, data) {
      if (err) {
        return res.status(500).json({
          error: true,
          message: err.message
        })
      } else {
        return res.status(200).json({
          error: false,
          mailData: data,
          message: "Email sent successfully"
        })

      }
    });
  }


}

export default mail