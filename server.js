const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 📬 Contact API route
const nodemailer = require('nodemailer');
require('dotenv').config();

app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Set up transporter using your SMTP info from spaceship.com
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,   // 🔁 replace with actual SMTP host (e.g., smtp.mail.yourhost.com)
    port: parseInt(process.env.SMTP_PORT),                    // or 465 for SSL
    secure: true,                // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,     // ✅ your full email address
      pass: process.env.SMTP_PASS           // ✅ your email login password
    }
  });

  const internalMail  = {
    from: `"SaskTech Lab" <${process.env.SMTP_USER}>`,
    to: process.env.To_Email,     // ✅ your target email
    subject: `New Contact Form: ${subject}`,
    text: `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
    `
  };
  
  // 2️⃣ Confirmation Email to User
  const userMail = {
    from: `"SaskTech Lab" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thank you for contacting SaskTech Lab",
    text: `
Hi ${name},

Thanks for reaching out to us! We’ve received your message and will get back to you shortly.

Here's a copy of your message:
Subject: ${subject}
Message: ${message}

Best regards,  
SaskTech Lab Team  
https://sasktechlab.com
    `
  };

  // Send both emails in sequence
  transporter.sendMail(internalMail, (err1, info1) => {
    if (err1) {
      console.error('❌ Error sending to admin:', err1);
      return res.status(500).json({ error: 'Message not sent to admin.' });
    }

    transporter.sendMail(userMail, (err2, info2) => {
      if (err2) {
        console.error('⚠️ Error sending confirmation to user:', err2);
        return res.status(500).json({ error: 'Message received but confirmation email failed.' });
      }

      console.log('📬 Admin email sent:', info1.response);
      console.log('📨 Confirmation email sent:', info2.response);
      res.status(200).json({ success: true, message: 'Message and confirmation email sent.' });
    });
  });
});


// Serve static React build
app.use(express.static(path.join(__dirname, 'build')));

// React SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
