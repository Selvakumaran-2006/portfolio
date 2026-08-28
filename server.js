import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static React production build files from 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB Connection Logic with IPv4 / Localhost & Cloud Atlas Fallback
const connectDatabase = async () => {
  const customUri = process.env.MONGO_URI;
  const connectionOptions = {
    serverSelectionTimeoutMS: 4000
  };

  if (customUri) {
    try {
      await mongoose.connect(customUri, connectionOptions);
      console.log('✅ MongoDB connected successfully to MONGO_URI! Database:', mongoose.connection.name);
      return;
    } catch (err) {
      console.warn('⚠️ MongoDB MONGO_URI connection failed:', err.message);
    }
  }

  // Try Localhost IPv4 first
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/selva_portfolio', connectionOptions);
    console.log('✅ MongoDB connected successfully to 127.0.0.1:27017! Database: selva_portfolio');
    return;
  } catch (err1) {
    // Try Localhost hostname second
    try {
      await mongoose.connect('mongodb://localhost:27017/selva_portfolio', connectionOptions);
      console.log('✅ MongoDB connected successfully to localhost:27017! Database: selva_portfolio');
      return;
    } catch (err2) {
      console.error('⚠️ Could not connect to local MongoDB instance:', err2.message);
      console.log('💡 Note: Running server in fail-safe mode. Web form submissions will dispatch emails to selvakumaran936@gmail.com.');
    }
  }
};

connectDatabase();

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
    console.warn('⚠️ Nodemailer: EMAIL_USER or EMAIL_PASS not set in environment. Web mail fallback active.');
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

// API Routes

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend Server is operational!',
    mongoConnected: mongoose.connection.readyState === 1
  });
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
      console.log('ℹ️ MongoDB connection not active. Bypassing database save.');
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
            <p style="font-size: 0.85rem; color: #94a3b8;">This message was generated automatically by Selva Kumaran's Developer Portfolio Backend.</p>
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

// Catch-all route for single-page React app (Express v5 compatible)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, error: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Full-Stack Server running on http://localhost:${PORT}`);
});
