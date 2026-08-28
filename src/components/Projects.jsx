import React, { useState, useEffect } from 'react';
import { FolderGit2, ExternalLink, Sparkles, RefreshCw, Star, GitFork, Code, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Resume Featured Projects with comprehensive metadata
  const featuredProjects = [
    {
      id: 'expense-tracker',
      name: 'EXPENSE TRACKER',
      fullName: 'Expense Management System (MERN Stack)',
      description: 'Architected a full-stack financial dashboard using React for dynamic UI and Node.js/Express RESTful APIs integrated with MongoDB. Implemented Mongoose schemas for budget allocation & automated transaction categorization.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      githubUrl: 'https://github.com/Selvakumaran-2006/Expense-tracker-',
      featured: true,
      stars: 5,
      forks: 2,
      accent: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'study-plan-scheduler',
      name: 'STUDY PLAN SCHEDULER',
      fullName: 'Personalized Timetable & Task Prioritizer',
      description: 'Built a Java scheduling application utilizing Collections Framework that generates optimized study timetables based on subject difficulty, priority scores, & study hours to streamline academic time management.',
      techStack: ['Java', 'Collections Framework', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/Selvakumaran-2006/Study-plan-scheduler',
      featured: true,
      stars: 4,
      forks: 1,
      accent: 'from-amber-500 to-red-500'
    }
  ];

  useEffect(() => {
    // Fetch live repos from GitHub API
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/Selvakumaran-2006/repos?sort=updated&per_page=10');
        if (!res.ok) throw new Error('GitHub API rate limited or offline');
        const data = await res.json();
        
        // Map API data into portfolio project format
        const fetched = data.map((repo) => ({
          id: repo.id,
          name: repo.name.toUpperCase().replace(/-/g, ' '),
          fullName: repo.full_name,
          description: repo.description || 'Full-stack & Software Engineering repository built with clean architecture.',
          techStack: [repo.language || 'JavaScript', 'Git', 'Open Source'],
          githubUrl: repo.html_url,
          featured: false,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          accent: 'from-indigo-500 to-purple-600'
        }));

        setGithubRepos(fetched);
      } catch (err) {
        console.log('Using pre-populated featured projects:', err.message);
        setError('GitHub API offline. Displaying verified local repositories.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Merge featured projects with fetched repos (avoiding duplicates)
  const allProjects = [...featuredProjects];
  githubRepos.forEach((repo) => {
    const exists = allProjects.some(
      (p) => p.githubUrl.toLowerCase() === repo.githubUrl.toLowerCase()
    );
    if (!exists) {
      allProjects.push(repo);
    }
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" /> Software Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="google-gradient-text">GitHub Projects</span>
          </h2>
          <p className="text-base text-slate-400">
            Real-world full-stack web applications and algorithmic tools built with MERN stack, Java, & RESTful microservices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`}></div>

              <div className="space-y-5">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold mb-2">
                        <Sparkles className="w-3 h-3" /> FEATURED MERN PROJECT
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {project.fullName}
                    </p>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-all shrink-0 shadow-lg"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <GitFork className="w-3.5 h-3.5" /> {project.forks}
                  </span>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub External Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Selvakumaran-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono font-semibold transition-all shadow-xl"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>Visit @Selvakumaran-2006 on GitHub for more repos</span>
          </a>
        </div>

      </div>
    </section>
  );
}
