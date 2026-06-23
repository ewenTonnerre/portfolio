'use client'

import { Layers, BrainCircuit, BarChart3, ShieldCheck } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const icons = [
  <Layers    className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />,
  <BrainCircuit className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" strokeWidth={1.5} />,
  <BarChart3 className="w-5 h-5 text-cyan-600 dark:text-cyan-400"    strokeWidth={1.5} />,
  <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />,
]

export default function PhoneMockup() {
  const { t } = useApp()

  return (
    <div className="flex-1 w-full flex justify-center lg:justify-end relative">
      <div className="phone-3d relative w-80 h-165 rounded-[3.5rem] bg-slate-900 border-10 border-slate-800/80 shadow-2xl overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
          <div className="w-32 h-7 bg-slate-800/80 rounded-b-3xl" />
        </div>

        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 flex flex-col overflow-hidden transition-colors duration-500">
          <div className="absolute inset-0 bg-linear-to-br from-fuchsia-200/50 to-blue-200/50 dark:from-fuchsia-900/40 dark:to-[#0a0a0f] z-0" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-400/20 dark:bg-fuchsia-600/30 rounded-full blur-[60px] z-0" />
          <div className="absolute bottom-10 -left-20 w-64 h-64 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[60px] z-0" />

          <div className="relative z-10 flex flex-col h-full p-6 pt-16 justify-end pb-10">
            <div className="mb-8 w-full">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
                {t.phone.name}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{t.phone.level}</p>
            </div>

            <div className="space-y-4 w-full">
              {t.phone.skills.map((skill, i) => (
                <div key={skill.title} className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-slate-200 dark:border-white/10 flex items-center gap-4 transition-all hover:bg-white/80 dark:hover:bg-white/10 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {icons[i]}
                  </div>
                  <div className="grow">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">{skill.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{skill.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-175 bg-fuchsia-500/20 dark:bg-fuchsia-600/10 rounded-[4rem] blur-[80px] -z-10 pointer-events-none transition-colors duration-500" />
    </div>
  )
}
