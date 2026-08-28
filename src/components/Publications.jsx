import React from 'react';
import { FileText, ShieldCheck, Cpu, Globe, Award, Sparkles, Bookmark } from 'lucide-react';

export default function Publications() {
  const patents = [
    {
      appNo: '202541037560A',
      title: 'Fraud Detection in Voting System Using Hybrid Biometric Scanner',
      country: 'India (Patent Office)',
      status: 'Patent Application Published',
      category: 'Biometrics & Security',
      description: 'Invented a hybrid biometric authentication framework integrating multi-factor physical scanning with cryptographic validation to eliminate voter fraud in election hardware.'
    },
    {
      appNo: '202541129936A',
      title: 'Fault Prediction in Computer Using IoT and Machine Learning Algorithms',
      country: 'India (Patent Office)',
      status: 'Patent Application Published',
      category: 'IoT & Predictive ML',
      description: 'Architected an automated computer system telemetry scanner utilizing IoT sensor telemetry & predictive ML models to forecast hardware failures prior to system downtime.'
    }
  ];

  const researchPaper = {
    title: 'Legal Status and Liability of Data Brokers and Third-Party Data Processors',
    journal: 'International Journal Research Publication Analysis (IJRPA)',
    volume: 'Volume 1, Issue 7',
    manuscriptNo: '1050',
    description: 'Published a peer-reviewed research analysis evaluating global data privacy compliance, liability frameworks, and technical oversight protocols for international third-party data broker entities.'
  };

  return (
    <section id="publications" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" /> Patents & Research
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Published <span className="google-gradient-text">Patents & Research Paper</span>
          </h2>
          <p className="text-base text-slate-400">
            Intellectual property achievements and peer-reviewed international journal publications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: 2 Indian Patent Applications */}
          {patents.map((patent, idx) => (
            <div
              key={patent.appNo}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 font-bold">
                    PATENT #{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {patent.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {patent.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {patent.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Application No:</span>
                  <span className="text-cyan-300 font-bold">{patent.appNo}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Jurisdiction:</span>
                  <span className="text-slate-200">{patent.country}</span>
                </div>
              </div>

            </div>
          ))}

          {/* Column 3: Peer Reviewed Research Paper */}
          <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group bg-gradient-to-b from-slate-900/90 to-slate-950/90">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 font-bold">
                  IJRPA JOURNAL PAPER
                </span>
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5" /> Published
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {researchPaper.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {researchPaper.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Journal:</span>
                <span className="text-indigo-300 font-semibold">{researchPaper.journal}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Volume / Issue:</span>
                <span className="text-slate-200">{researchPaper.volume}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Manuscript No:</span>
                <span className="text-emerald-400 font-bold">{researchPaper.manuscriptNo}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
