import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ParticlesBg from './ParticlesBg';

export default function WelcomeSplash({ onEnter }) {
  const [exiting, setExiting] = useState(false);

  const handleEnterClick = () => {
    setExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-[#050816] flex items-center justify-center p-4 overflow-hidden bg-radial-glow bg-subtle-grid transition-all duration-700 ${
      exiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      
      {/* Background Particles */}
      <ParticlesBg />

      {/* Radial Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/25 via-[#3B82F6]/20 to-[#22D3EE]/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Glassmorphic Welcome Card */}
      <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-6 sm:p-8 glass-card rounded-3xl border border-[#8B5CF6]/40 shadow-neon-violet animate-text-reveal">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#22D3EE]/40 text-[11px] font-mono font-semibold text-[#22D3EE] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-spin" />
          <span>Developer Portfolio</span>
        </div>

        {/* Welcome Headline */}
        <div className="space-y-2">
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-snug">
            Welcome to <br />
            <span className="text-gradient-purple-cyan">Selva's Portfolio</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-normal max-w-md mx-auto">
            Computer Science Engineering Graduate • Full-Stack MERN Architect • Java Specialist
          </p>
        </div>

        {/* Highlights Pills */}
        <div className="flex flex-wrap justify-center gap-2 text-[11px] font-mono text-[#F8FAFC]">
          <span className="px-3 py-1 rounded-full bg-[#0B1026] border border-[#8B5CF6]/30 text-[#22D3EE]">
            🎓 8.25 CGPA
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0B1026] border border-[#8B5CF6]/30 text-[#A855F7]">
            ⚡ 460+ LeetCode
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0B1026] border border-[#8B5CF6]/30 text-[#3B82F6]">
            📜 2 Patents
          </span>
        </div>

        {/* Enter Button */}
        <div className="pt-2">
          <button
            onClick={handleEnterClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl neon-btn text-xs font-heading font-extrabold flex items-center justify-center gap-2.5 mx-auto shadow-neon-violet group"
          >
            <span>ENTER PORTFOLIO 🚀</span>
            <ArrowRight className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
