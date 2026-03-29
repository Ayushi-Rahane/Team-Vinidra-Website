const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to send email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "patilsanskruti316@gmail.com",       // YOUR Gmail
        pass: "nsreycxqutqpupxg",         // 16-character App Password
      },
    });

    const mailOptions = {
      from: email,                         // sender: user's email
      to: "patilsanskruti316@gmail.com",   // receiver: your email
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));