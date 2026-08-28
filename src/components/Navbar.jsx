import React, { useState, useEffect } from 'react';
import { User, Code2, FolderGit2, Award, FileText, Send, Download } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050816]/90 backdrop-blur-2xl border-b border-[#8B5CF6]/30 py-3 shadow-2xl shadow-[#8B5CF6]/10' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-[#3B82F6] via-[#A855F7] to-[#22D3EE] p-0.5 shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-heading font-black text-xl tracking-tighter">
              <span className="text-[#3B82F6]">S</span>
              <span className="text-[#A855F7]">K</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-[#F8FAFC] flex items-center gap-2">
              SELVA KUMARAN
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#22D3EE] animate-ping"></span>
            </span>
            <span className="text-[10px] text-[#22D3EE] font-mono font-bold tracking-widest uppercase">CSE FRESHER & MERN ARCHITECT</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B1026]/90 p-1.5 rounded-full border border-[#8B5CF6]/30 backdrop-blur-2xl shadow-xl">
          <a href="#about" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#22D3EE]" /> About
          </a>
          <a href="#skills" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" /> Skills
          </a>
          <a href="#projects" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#A855F7]" /> Projects
          </a>
          <a href="#certificates" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#22D3EE]" /> Certs
          </a>
          <a href="#publications" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" /> Patents
          </a>
          <a href="#contact" className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] hover:bg-[#050816] rounded-full transition-all flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5 text-[#A855F7]" /> Contact
          </a>
        </nav>

        {/* Download Resume Button */}
        <div className="flex items-center gap-3">
          <a
            href="/Selva_Kumaran_G_Resume.pdf"
            download="Selva_Kumaran_G_Resume.pdf"
            className="px-5 py-2.5 rounded-full text-xs neon-btn flex items-center gap-2 tracking-wide uppercase shadow-neon-violet"
          >
            <Download className="w-4 h-4 text-[#22D3EE]" />
            <span>Download Resume</span>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#0B1026] border border-[#8B5CF6]/30 text-[#F8FAFC]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050816]/95 border-b border-[#8B5CF6]/30 px-6 py-5 space-y-3 backdrop-blur-2xl animate-text-reveal">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">Projects</a>
          <a href="#certificates" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">Certificates</a>
          <a href="#publications" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">Patents & Papers</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#F8FAFC] hover:text-[#22D3EE]">Contact</a>
        </div>
      )}
    </header>
  );
}
