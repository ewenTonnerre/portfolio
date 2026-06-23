'use client'

import { FolderGit2, ArrowUpRight, Award } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export default function Projects() {
  const { t } = useApp()

  return (
    <div id="projects" className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300">
          <FolderGit2 className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {t.projects.heading}
        </h2>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {t.projects.items.map((project) => (
          <article key={project.title} className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/80 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10">
            <div className="flex items-start justify-between mb-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">{project.subtitle}</p>
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 shrink-0 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                >
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ) : project.award ? (
                <span className="w-9 h-9 shrink-0 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" strokeWidth={1.5} />
                </span>
              ) : null}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
