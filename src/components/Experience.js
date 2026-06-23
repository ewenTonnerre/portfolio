'use client'

import { Briefcase, GraduationCap } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export default function Experience() {
  const { t } = useApp()
  const { items, education_items } = t.experience

  return (
    <div id="parcours" className="flex flex-col gap-12">
      {/* Professional */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300">
            <Briefcase className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t.experience.heading}
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-6 space-y-10 pb-4 mt-4">
          {items.map((xp, i) => (
            <article key={i} className="relative pl-10">
              <div className={`absolute -left-2.75 top-1 w-5 h-5 rounded-full ring-4 ring-slate-50 dark:ring-[#0a0a0f] ${xp.current ? 'bg-linear-to-br from-fuchsia-500 to-purple-600' : 'bg-slate-300 dark:bg-slate-700'}`} />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{xp.title}</h3>
              <p className={`text-sm font-medium mb-2 ${xp.current ? 'text-fuchsia-600 dark:text-fuchsia-400' : 'text-slate-500'}`}>
                {xp.period}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{xp.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t.experience.education}
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-6 space-y-10 pb-4 mt-4">
          {education_items.map((edu, i) => (
            <article key={i} className="relative pl-10">
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-cyan-400 dark:bg-cyan-500 ring-4 ring-slate-50 dark:ring-[#0a0a0f]" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-1">{edu.period} · {edu.school}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.option}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
