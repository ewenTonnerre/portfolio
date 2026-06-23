'use client'

import { Layers, BrainCircuit, BarChart3, ShieldCheck } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const icons = [
  <Layers       className="w-7 h-7" strokeWidth={1.5} />,
  <BrainCircuit className="w-7 h-7" strokeWidth={1.5} />,
  <BarChart3    className="w-7 h-7" strokeWidth={1.5} />,
  <ShieldCheck  className="w-7 h-7" strokeWidth={1.5} />,
]

const iconColors = [
  'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  'bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400',
  'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
]

export default function Expertise() {
  const { t } = useApp()

  return (
    <section id="expertise" className="flex flex-col gap-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
          {t.expertise.heading}
        </h2>
        <div className="w-16 h-1 bg-fuchsia-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.expertise.cards.map((card, i) => (
          <article key={card.title} className="p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-500">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconColors[i]}`}>
              {icons[i]}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{card.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
