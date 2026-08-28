import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, Download, Award, Code, Terminal, FileCode2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const roles = [
    'Computer Science Engineering Fresher',
    'Full-Stack MERN Architect',
    'Java & Algorithm Specialist',
    'Published Patent Innovator'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-glow bg-subtle-grid">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8B5CF6]/25 via-[#3B82F6]/20 to-[#22D3EE]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-text-reveal">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-[#8B5CF6]/40 shadow-neon-purple">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span className="text-[11px] font-semibold text-[#22D3EE] tracking-wide font-mono">
                Available for Software Engineer & Full-Stack Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#22D3EE] tracking-widest uppercase block font-bold">
                Computer Science & Engineering Graduate
              </span>
              
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
                SELVA <span className="text-gradient-purple-cyan">KUMARAN G</span>
              </h1>

              {/* Dynamic Role Text */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-base sm:text-xl font-bold text-[#22D3EE] font-mono flex items-center gap-2">
                  <span className="text-[#A855F7]">&gt;</span>
                  <span className="transition-all duration-500 text-[#F8FAFC]">
                    {roles[roleIndex]}
                  </span>
                  <span className="animate-pulse text-[#22D3EE]">|</span>
                </p>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-xl font-normal">
              High-achieving CSE student (<span className="text-[#F8FAFC] font-semibold underline decoration-[#22D3EE]">8.25 CGPA</span> at VSB College of Engineering). 
              Specialized in full-stack MERN web applications, REST APIs, and Java algorithms (<span className="text-[#22D3EE] font-semibold">460+ LeetCode Solved</span>). 
              Published 2 Patents in Voting Security & IoT Machine Learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="/Selva_Kumaran_G_Resume.pdf"
                download="Selva_Kumaran_G_Resume.pdf"
                className="px-6 py-3 rounded-xl neon-btn flex items-center gap-2 group shadow-neon-violet font-heading font-bold text-xs"
              >
                <Download className="w-4 h-4 text-[#22D3EE]" />
                <span>Download Resume 📄</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-xl neon-btn-outline font-heading font-bold text-xs flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE]" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-[#0B1026] border border-[#8B5CF6]/30 hover:border-[#A855F7] text-[#94A3B8] hover:text-[#F8FAFC] font-semibold text-xs transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Contact</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="pt-6 border-t border-[#0B1026] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-card p-3 rounded-xl text-center">
                <span className="text-xl font-bold text-[#3B82F6] block font-mono">8.25</span>
                <span className="text-[10px] text-[#94A3B8] font-semibold uppercase tracking-wider">B.E CSE CGPA</span>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <span className="text-xl font-bold text-[#A855F7] block font-mono">460+</span>
                <span className="text-[10px] text-[#94A3B8] font-semibold uppercase tracking-wider">LeetCode Solved</span>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <span className="text-xl font-bold text-[#8B5CF6] block font-mono">2</span>
                <span className="text-[10px] text-[#94A3B8] font-semibold uppercase tracking-wider">Published Patents</span>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <span className="text-xl font-bold text-[#22D3EE] block font-mono">4★ Java</span>
                <span className="text-[10px] text-[#94A3B8] font-semibold uppercase tracking-wider">HackerRank Star</span>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Display (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-[340px]">
              
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#8B5CF6] via-[#A855F7] via-[#3B82F6] to-[#22D3EE] blur-md opacity-80 animate-pulse-glow"></div>

              <div className="relative rounded-3xl bg-white p-1.5 border border-[#22D3EE] shadow-neon-cyan overflow-hidden group">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-[#0B1026] flex items-center justify-center">
                  
                  <img
                    src={profileImg}
                    alt="Selva Kumaran G Formal Photograph"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transform group-hover:scale-105 transition-transform duration-700 z-0"
                  />

                  <div className="absolute bottom-3 left-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-[#050816]/95 border border-[#22D3EE]/80 backdrop-blur-xl text-center shadow-xl">
                    <span className="text-xs font-heading font-bold text-[#F8FAFC] tracking-wide block">
                      SELVA KUMARAN G
                    </span>
                    <span className="text-[10px] text-[#22D3EE] font-mono font-semibold tracking-wider">
                      B.E Computer Science & Engineering
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-3 -left-4 glass-card px-3 py-2 rounded-xl border border-[#3B82F6]/60 shadow-xl animate-float text-[11px] font-bold flex items-center gap-1.5 text-[#3B82F6] z-30">
                <FileCode2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Java & MERN</span>
              </div>

              <div className="absolute -top-1 -right-4 glass-card px-3 py-2 rounded-xl border border-[#A855F7]/60 shadow-xl animate-float-reverse text-[11px] font-bold flex items-center gap-1.5 text-[#A855F7] z-30">
                <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>8.25 CGPA</span>
              </div>

              <div className="absolute bottom-12 -left-6 glass-card px-3 py-2 rounded-xl border border-[#8B5CF6]/60 shadow-xl animate-float-reverse text-[11px] font-bold flex items-center gap-1.5 text-[#8B5CF6] z-30">
                <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>2 Patents</span>
              </div>

              <div className="absolute bottom-8 -right-4 glass-card px-3 py-2 rounded-xl border border-[#22D3EE]/60 shadow-xl animate-float text-[11px] font-bold flex items-center gap-1.5 text-[#22D3EE] z-30">
                <Code className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>100% SSLC</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
