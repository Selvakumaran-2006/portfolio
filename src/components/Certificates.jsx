import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Database, Cpu, Brain, FileSpreadsheet, CheckCircle2, Folder, Sparkles } from 'lucide-react';

export default function Certificates() {
  const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1zKKzVXL66CHf-EZYYPg8hMNky-npdoR6";

  const certificatesList = [
    {
      id: 'data-science',
      title: 'Data Science for Beginners',
      issuer: 'Board Infinity',
      year: '2026',
      badge: 'Data Science',
      icon: Database,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Exploratory data analysis, statistical modeling, Python data structures, and data visualization best practices.',
      accent: 'border-blue-400/50 hover:border-blue-300'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      badge: 'Security',
      icon: ShieldCheck,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Network security principles, threat mitigation, encryption protocols, and organizational security compliance.',
      accent: 'border-emerald-400/50 hover:border-emerald-300'
    },
    {
      id: 'big-data',
      title: 'Big Data Computing',
      issuer: 'NPTEL (Elite Certification)',
      year: '2025',
      badge: 'NPTEL Elite',
      icon: Cpu,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Elite distinction in MapReduce paradigms, Hadoop ecosystem architecture, Apache Spark, and large-scale data processing.',
      accent: 'border-amber-400/50 hover:border-amber-300'
    },
    {
      id: 'iot',
      title: 'Introduction to IoT',
      issuer: 'NPTEL (Elite Certification)',
      year: '2026',
      badge: 'NPTEL Elite',
      icon: Cpu,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Internet of Things sensor nodes, wireless communication protocols (MQTT, HTTP), embedded computing, and cloud pipelines.',
      accent: 'border-cyan-400/50 hover:border-cyan-300'
    },
    {
      id: 'ai-beginners',
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      year: '2025',
      badge: 'Artificial Intelligence',
      icon: Brain,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Machine learning fundamentals, artificial intelligence concepts, neural network architectures, and ethical AI.',
      accent: 'border-purple-400/50 hover:border-purple-300'
    },
    {
      id: 'excel',
      title: 'Getting Started with Microsoft Excel',
      issuer: 'Coursera',
      year: '2025',
      badge: 'Analytics',
      icon: FileSpreadsheet,
      driveLink: DRIVE_FOLDER_URL,
      description: 'Data manipulation, advanced VLOOKUP/INDEX-MATCH formulas, Pivot Tables, conditional formatting, and dashboards.',
      accent: 'border-emerald-400/50 hover:border-emerald-300'
    }
  ];

  const openDrive = (url) => {
    window.open(url || DRIVE_FOLDER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-28 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            <Award className="w-4 h-4 text-amber-400" /> Verified Credentials
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Certifications on <span className="gradient-text-amber">Google Drive</span>
          </h2>
          <p className="text-base text-slate-200">
            Click any certificate card below to view the official documents stored in Selva Kumaran's Google Drive folder.
          </p>

          {/* Active Folder Pill */}
          <div className="pt-2">
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-cyan-400/60 text-xs font-mono text-cyan-300 font-bold hover:border-cyan-300 transition-all shadow-lg"
            >
              <Folder className="w-4 h-4 text-amber-400" />
              <span>Google Drive Folder: 1zKKzVXL66CHf-EZYYPg8hMNky-npdoR6 ↗</span>
            </a>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                onClick={() => openDrive(cert.driveLink)}
                className={`glass-card p-6 rounded-3xl border ${cert.accent} flex flex-col justify-between group cursor-pointer relative transform hover:-translate-y-1.5 transition-all duration-300 shadow-2xl`}
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-amber-300 font-bold">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-cyan-300 font-bold block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </div>

                {/* Card Direct Drive Action Button */}
                <div className="pt-4 mt-6 border-t border-slate-800 space-y-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openDrive(cert.driveLink);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Folder className="w-4 h-4 text-slate-950" />
                    <span>Open Certificate in Google Drive ↗</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1 text-emerald-300 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> selvakumaran936@gmail.com
                    </span>
                    <span className="text-cyan-300 font-bold">Drive Verified</span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Global Google Drive Callout Banner */}
        <div className="mt-12 text-center">
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-100 hover:text-white text-xs font-mono font-bold transition-all shadow-xl"
          >
            <Folder className="w-5 h-5 text-amber-400" />
            <span>Open @selvakumaran936 Official Certificates Google Drive Folder</span>
            <ExternalLink className="w-4 h-4 text-cyan-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
