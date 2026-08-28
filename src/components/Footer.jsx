import React from 'react';
import { Terminal, Award, ArrowUp, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] border-t border-[#0B1026] py-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#0B1026]">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <span className="font-heading font-extrabold text-xl text-[#F8FAFC] tracking-tight flex items-center gap-2">
              SELVA KUMARAN G
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#22D3EE] font-mono">
                BE CSE 2027
              </span>
            </span>
            <p className="text-xs text-[#94A3B8] max-w-sm">
              Computer Science Engineering Student • MERN Stack Developer • 2 Published Patents • 460+ LeetCode Solved
            </p>
          </div>

          {/* Social Links & Download Resume */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Selvakumaran-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#0B1026] border border-[#8B5CF6]/30 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#22D3EE] transition-all shadow-md"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/selva-kumaran-g-31b239329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#0B1026] border border-[#8B5CF6]/30 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6] transition-all shadow-md"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="https://leetcode.com/u/SelvaKumaran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#0B1026] border border-[#8B5CF6]/30 text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all shadow-md"
              title="LeetCode"
            >
              <Terminal className="w-5 h-5" />
            </a>

            <a
              href="https://www.hackerrank.com/profile/selvakumaran936"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#0B1026] border border-[#8B5CF6]/30 text-[#94A3B8] hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all shadow-md"
              title="HackerRank"
            >
              <Award className="w-5 h-5" />
            </a>

            <a
              href="/Selva_Kumaran_G_Resume.pdf"
              download="Selva_Kumaran_G_Resume.pdf"
              className="px-5 py-3 rounded-2xl neon-btn text-white font-heading font-extrabold text-xs flex items-center gap-1.5 shadow-neon-violet hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4 text-[#22D3EE]" />
              <span>Download Resume 📄</span>
            </a>
          </div>

        </div>

        {/* Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Selva Kumaran G. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#94A3B8] hover:text-[#22D3EE] transition-colors font-mono"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
