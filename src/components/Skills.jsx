import React, { useState } from 'react';
import { Code2, Database, Wrench, Layers, Terminal, CheckCircle2, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'web', label: 'Web & Frameworks', icon: Terminal },
    { id: 'database', label: 'Databases & Query', icon: Database },
    { id: 'tools', label: 'Tools & Platforms', icon: Wrench },
  ];

  const skillList = [
    { name: 'Java', category: 'languages', level: 'Advanced', icon: '☕', description: 'Core Java, OOP, Collections Framework, Exception Handling, Multithreading' },
    { name: 'React.js', category: 'web', level: 'Intermediate', icon: '⚛️', description: 'Components, Hooks, State Management, Virtual DOM, Responsive Dashboards' },
    { name: 'Node.js', category: 'web', level: 'Intermediate', icon: '🟢', description: 'Event-driven architecture, Express HTTP servers, Middleware logic' },
    { name: 'Express.js', category: 'web', level: 'Intermediate', icon: '🚂', description: 'RESTful API routing, JWT Authentication, Error handling middleware' },
    { name: 'HTML5 & CSS3', category: 'web', level: 'Advanced', icon: '🌐', description: 'Semantic markup, Flexbox, Grid, Glassmorphism, Micro-animations' },
    { name: 'MongoDB', category: 'database', level: 'Intermediate', icon: '🍃', description: 'NoSQL collections, Mongoose ODM schemas, Aggregations, Indexing' },
    { name: 'SQL', category: 'database', level: 'Intermediate', icon: '🐬', description: 'Relational query formulation, Joins, Triggers, Normalization' },
    { name: 'Visual Studio Code', category: 'tools', level: 'Advanced', icon: '💙', description: 'Custom extensions, Debugging, Integrated Terminal environment' },
    { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: '🐙', description: 'Version control, Branching workflows, PR reviews, CI/CD basics' },
    { name: 'Power BI', category: 'tools', level: 'Intermediate', icon: '📊', description: 'Interactive dashboard analytics, Data transformation, Visual reporting' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-[#050816] border-t border-[#0B1026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[11px] font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" /> Technical Skillset
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Categorized & <span className="text-gradient-purple-cyan">Interactive Skills</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Hand-picked technologies, frameworks, and developer tools extracted directly from coursework, internships, and full-stack projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold tracking-wide flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'neon-btn shadow-neon-violet'
                    : 'glass-card text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glowing-card p-5 rounded-2xl border border-[#8B5CF6]/30 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-2 rounded-xl bg-[#0B1026] border border-[#8B5CF6]/30">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase font-semibold">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#0B1026] text-[10px] font-mono font-bold text-[#22D3EE] border border-[#22D3EE]/30">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#0B1026] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1 text-[#22D3EE] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE]" /> Verified Skill
                </span>
                <span className="text-[#A855F7] font-semibold">
                  Proficient
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
