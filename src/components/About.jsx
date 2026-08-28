import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Target, CheckCircle2, Globe, Sparkles, Terminal } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="py-20 relative bg-[#050816] border-t border-[#0B1026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[11px] font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
            <User className="w-3.5 h-3.5 text-[#22D3EE]" /> Professional Profile
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Passionate CSE Graduate & <span className="text-gradient-purple-cyan">Full-Stack Developer</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-normal">
            Solid academic foundation in Computer Science & Engineering combined with practical MERN stack experience, Java algorithm optimization, & software patents formulation.
          </p>
        </div>

        {/* Tab Switcher Header */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold tracking-wide flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'overview'
                ? 'neon-btn shadow-neon-violet'
                : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-[#22D3EE]" /> Career Overview
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold tracking-wide flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'education'
                ? 'neon-btn shadow-neon-violet'
                : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#22D3EE]" /> Academic Timeline
          </button>

          <button
            onClick={() => setActiveTab('internships')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold tracking-wide flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'internships'
                ? 'neon-btn shadow-neon-violet'
                : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#22D3EE]" /> Internships
          </button>

          <button
            onClick={() => setActiveTab('coding')}
            className={`px-5 py-2.5 rounded-xl text-xs font-heading font-bold tracking-wide flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'coding'
                ? 'neon-btn shadow-neon-violet'
                : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" /> Coding Benchmarks
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-text-reveal">
            <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC] flex items-center gap-2">
                <span>Career Objective & Vision</span>
                <Sparkles className="w-4 h-4 text-[#A855F7]" />
              </h3>

              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                As a Computer Science and Engineering student at <span className="text-[#22D3EE] font-bold">VSB College of Engineering Technical Campus</span>, I specialize in full-stack web application development, algorithm design in Java, and relational/NoSQL database management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#0B1026]">
                <div className="p-3 bg.-[#0B1026] rounded-xl border border-[#8B5CF6]/20 space-y-1">
                  <h4 className="text-[11px] font-mono text-[#22D3EE] font-bold uppercase">Software Engineering</h4>
                  <p className="text-[11px] text-[#94A3B8]">Designing RESTful APIs, modular frontend React components, and secure database schemas.</p>
                </div>
                <div className="p-3 bg-[#0B1026] rounded-xl border border-[#8B5CF6]/20 space-y-1">
                  <h4 className="text-[11px] font-mono text-[#A855F7] font-bold uppercase">Research & Innovation</h4>
                  <p className="text-[11px] text-[#94A3B8]">Published 2 Patent Applications in India & 1 peer-reviewed International Journal paper.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">Core Value Pillars</h3>
                <ul className="space-y-2.5 text-xs text-[#94A3B8] font-medium">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>Clean Code & Maintainable System Architecture</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>Continuous Algorithm Practice (460+ LeetCode)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>Cross-functional MERN & Data Analytics Skills</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span>Fast Learner & Team Collaborator</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-[#0B1026] rounded-xl border border-[#8B5CF6]/30 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-2 text-[#F8FAFC] font-bold">
                  <Globe className="w-3.5 h-3.5 text-[#3B82F6]" /> Languages Spoken:
                </span>
                <span className="text-[#22D3EE] font-bold">English, Tamil</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Academic Timeline */}
        {activeTab === 'education' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-text-reveal">
            <div className="relative border-l border-[#8B5CF6]/30 ml-4 pl-6 space-y-8">
              
              {/* B.E CSE */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-5 h-5 rounded-full bg-[#3B82F6] border-4 border-[#050816]"></div>
                <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-2 border-l-4 border-l-[#3B82F6]">
                  <div className="flex flex-wrap justify-between items-center text-xs font-mono">
                    <span className="text-[#22D3EE] font-bold">Sep 2023 - Sep 2027</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] font-bold border border-[#3B82F6]/40">CGPA: 8.25 / 10.00</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC]">B.E Computer Science and Engineering</h3>
                  <p className="text-xs text-[#94A3B8] font-semibold">VSB College of Engineering Technical Campus</p>
                  <p className="text-[11px] text-[#94A3B8]">Core Coursework: Data Structures, OOP in Java, Database Management Systems, Web Technologies, Software Engineering, Operating Systems.</p>
                </div>
              </div>

              {/* XII HSC */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-5 h-5 rounded-full bg-[#A855F7] border-4 border-[#050816]"></div>
                <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-2 border-l-4 border-l-[#A855F7]">
                  <div className="flex flex-wrap justify-between items-center text-xs font-mono">
                    <span className="text-[#A855F7] font-bold">Higher Secondary Schooling</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#A855F7]/20 text-[#A855F7] font-bold border border-[#A855F7]/40">Percentage: 82.1%</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC]">XII (HSC) Higher Secondary</h3>
                  <p className="text-xs text-[#94A3B8] font-semibold">ST Assisi Matric Higher Secondary School</p>
                </div>
              </div>

              {/* X SSLC */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-0 w-5 h-5 rounded-full bg-[#22D3EE] border-4 border-[#050816]"></div>
                <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-2 border-l-4 border-l-[#22D3EE]">
                  <div className="flex flex-wrap justify-between items-center text-xs font-mono">
                    <span className="text-[#22D3EE] font-bold">Secondary Schooling</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#22D3EE]/20 text-[#22D3EE] font-bold border border-[#22D3EE]/40">Percentage: 100% ✨</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC]">X (SSLC) Secondary School</h3>
                  <p className="text-xs text-[#94A3B8] font-semibold">ST Assisi Matric Higher Secondary School</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Internships */}
        {activeTab === 'internships' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-text-reveal">
            
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[11px] font-mono text-[#3B82F6] font-bold">
                  July 2025
                </span>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                  FULL STACK DEVELOPMENT
                </h3>
                <p className="text-xs font-semibold text-[#94A3B8]">S3 Remotica (Quabasclay)</p>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Developed end-to-end web application modules, handled client-side UI rendering, and integrated back-end server routes.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[11px] font-mono text-[#22D3EE] font-bold">
                  December 2025
                </span>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                  MERN STACK DEVELOPMENT
                </h3>
                <p className="text-xs font-semibold text-[#94A3B8]">Viruzverse Solution</p>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Engineered React dashboards, Express REST APIs, and MongoDB document schemas with Mongoose Object Modeling.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/40 text-[11px] font-mono text-[#A855F7] font-bold">
                  January 2026
                </span>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                  DATA ANALYTICS
                </h3>
                <p className="text-xs font-semibold text-[#94A3B8]">Future Inters</p>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  Executed dataset transformation, formulated SQL query reports, and created executive analytics dashboards.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Coding Benchmarks */}
        {activeTab === 'coding' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto animate-text-reveal">
            
            <div className="glass-card p-6 rounded-2xl border border-[#A855F7]/40 space-y-3 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#A855F7] text-2xl">
                ⚡
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#A855F7] font-mono">460+ Problems</h3>
              <h4 className="font-heading text-sm font-bold text-[#F8FAFC]">LeetCode Solved</h4>
              <p className="text-[11px] text-[#94A3B8]">Extensive practice in Data Structures, Arrays, Dynamic Programming, Strings, and Binary Search.</p>
              <a href="https://leetcode.com/u/SelvaKumaran" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#0B1026] border border-[#8B5CF6]/30 text-xs text-[#22D3EE] font-mono font-bold hover:border-[#A855F7] transition-all">
                View LeetCode Profile &rarr;
              </a>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-[#22D3EE]/40 space-y-3 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/20 border border-[#22D3EE]/40 flex items-center justify-center text-[#22D3EE] text-2xl">
                ☕
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#22D3EE] font-mono">4★ Gold Badge</h3>
              <h4 className="font-heading text-sm font-bold text-[#F8FAFC]">HackerRank Java</h4>
              <p className="text-[11px] text-[#94A3B8]">Demonstrated Java mastery in Object-Oriented Programming, Collections Framework, & Algorithms.</p>
              <a href="https://www.hackerrank.com/profile/selvakumaran936" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-[#0B1026] border border-[#8B5CF6]/30 text-xs text-[#22D3EE] font-mono font-bold hover:border-[#22D3EE] transition-all">
                View HackerRank Profile &rarr;
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
