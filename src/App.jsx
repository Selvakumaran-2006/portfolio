import React, { useState } from 'react';
import WelcomeSplash from './components/WelcomeSplash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
import CursorSparkles from './components/CursorSparkles';
import './App.css';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] font-sans selection:bg-[#A855F7] selection:text-[#050816] relative overflow-x-hidden">
      
      {/* Interactive Mouse Cursor Sparkles Trail */}
      <CursorSparkles />

      {/* Subtle Floating Particle Background */}
      <ParticlesBg />

      {/* Initial Welcome Splash Screen */}
      {!hasEntered && (
        <WelcomeSplash onEnter={() => setHasEntered(true)} />
      )}

      {/* Main Portfolio Website */}
      {hasEntered && (
        <div className="animate-text-reveal">
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Publications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

    </div>
  );
}
