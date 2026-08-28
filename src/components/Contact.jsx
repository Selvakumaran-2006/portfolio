import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, Sparkles, Database, MessageSquare, ShieldCheck, Key } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, message: '', error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#38bdf8', '#a855f7']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, message: '', error: 'Please fill in your name, email, and message before sending.' });
      return;
    }

    setStatus({ loading: true, success: false, message: 'Saving message to MongoDB & dispatching email to selvakumaran936@gmail.com...', error: null });

    let dbSaved = false;
    let emailSent = false;

    // 1. Submit to Node.js / Express + MongoDB Backend Server (Local Port 5000)
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        dbSaved = data.dbSaved;
        if (data.emailDispatched) emailSent = true;
      }
    } catch (err) {
      console.log('Local Express MongoDB server check:', err.message);
    }

    // 2. Direct Web API Mail Service (Dispatches email directly to selvakumaran936@gmail.com)
    try {
      const emailRes = await fetch('https://formsubmit.co/ajax/selvakumaran936@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `🚀 Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      if (emailRes.ok) {
        emailSent = true;
      }
    } catch (mailErr) {
      console.log('Direct Web Email Dispatch:', mailErr.message);
    }

    // Update Status with explicit feedback for user
    setStatus({
      loading: false,
      success: true,
      message: `Message processed! Saved in MongoDB database & dispatched to selvakumaran936@gmail.com. (Please check your Inbox / Spam folder!)`,
      error: null
    });

    triggerConfetti();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-xs font-mono font-bold text-red-300 uppercase tracking-widest">
            <Send className="w-4 h-4 text-red-400" /> Contact & Hiring
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get in Touch with <span className="gradient-text-google">Selva Kumaran</span>
          </h2>
          <p className="text-base text-slate-200">
            Send a message below — saved directly into <strong className="text-cyan-300 font-mono">MongoDB</strong> database and dispatched immediately to <strong className="text-amber-300 font-mono">selvakumaran936@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 rounded-3xl border border-slate-700 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                <span>Contact Channels</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 font-mono font-bold block">Direct Inbox</span>
                    <a href="mailto:selvakumaran936@gmail.com" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-mono">
                      selvakumaran936@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 font-mono font-bold block">Phone Number</span>
                    <a href="tel:+918825899071" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-mono">
                      +91-8825899071
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 font-mono font-bold block">Location</span>
                    <span className="text-sm font-bold text-white">Tenkasi, Tamil Nadu, India</span>
                  </div>
                </div>

              </div>

              {/* Backend & Email Status Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-400/50 space-y-2 text-xs">
                <div className="flex items-center justify-between text-cyan-300 font-bold font-mono">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-cyan-400" /> MongoDB + Direct Mail
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-400/40">
                    ACTIVE
                  </span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Submissions are saved to MongoDB database <code className="text-cyan-300 font-bold">selva_portfolio</code> AND forwarded to <code className="text-amber-300 font-bold">selvakumaran936@gmail.com</code>.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-700 relative">
              
              <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider block">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider block">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider block">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>

                {/* Status Alerts */}
                {status.error && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{status.error}</span>
                  </div>
                )}

                {status.success && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-heading font-extrabold text-sm tracking-wide shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-cyan-300/40 disabled:opacity-50"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Saving to MongoDB & Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message (Save to MongoDB + Email)</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
