import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/selva_portfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully! Database: selva_portfolio'))
  .catch((err) => {
    console.error('⚠️ MongoDB connection error:', err.message);
    console.log('💡 Note: Running without MongoDB connection if local instance is not active.');
  });

// Message Schema & Model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Unread' }
});

const ContactMessage = mongoose.model('ContactMessage', ContactSchema);

// Nodemailer Transport Setup
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn('⚠️ Nodemailer: EMAIL_USER or EMAIL_PASS not set in environment. Mail dispatch will operate in simulation mode.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
};

// Routes

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend Server is healthy & operational!' });
});

// Submit Contact Form (Saves to MongoDB + Dispatches Email)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields (name, email, message) are required.' });
    }

    // 1. Save to MongoDB
    let savedMsg = null;
    if (mongoose.connection.readyState === 1) {
      const newMessage = new ContactMessage({ name, email, message });
      savedMsg = await newMessage.save();
      console.log('💾 Message saved to MongoDB:', savedMsg._id);
    } else {
      console.log('ℹ️ MongoDB not connected. Bypassing database save.');
    }

    // 2. Dispatch Email via Nodemailer
    const transporter = createTransporter();
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'selvakumaran936@gmail.com';

    let emailSent = false;
    if (transporter) {
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `🚀 Portfolio Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 8px;">
            <h2 style="color: #38bdf8; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">New Message from Portfolio Website</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
            <p><strong>Received At:</strong> ${new Date().toLocaleString()}</p>
            <hr style="border: 1px solid #334155; margin: 15px 0;" />
            <p><strong>Message Content:</strong></p>
            <div style="background-color: #1e293b; padding: 15px; border-radius: 6px; border-left: 4px solid #818cf8; white-space: pre-wrap;">${message}</div>
            <br />
            <p style="font-size: 0.85rem; color: #94a3b8;">This message was generated automatically by Selva Kumaran's Interactive Google Gravity Portfolio Backend.</p>
          </div>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('📧 Email notification sent to:', recipientEmail);
      } catch (mailErr) {
        console.error('❌ Failed to send email via Nodemailer:', mailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been processed successfully!',
      dbSaved: !!savedMsg,
      emailDispatched: emailSent
    });

  } catch (error) {
    console.error('❌ Error handling contact form submission:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error. Please try again later.' });
  }
});

// Admin Route to view stored messages
app.get('/api/contact/messages', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, error: 'MongoDB connection inactive.' });
    }
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Express Server running on http://localhost:${PORT}`);
});
