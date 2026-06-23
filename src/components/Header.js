'use client'

import { Terminal, Moon, Sun } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export default function Header() {
  const { lang, theme, t, toggleLang, toggleTheme } = useApp()

  return (
    <header className="w-full fixed top-0 z-50 px-6 py-6 lg:px-12 flex justify-between items-center bg-slate-50/50 dark:bg-[#0a0a0f]/50 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 transition-colors duration-500">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
          <Terminal className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>
        <span className="text-base font-semibold tracking-tight uppercase">Ewen Tonnerre</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
        <a href="#about"     className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.about}</a>
        <a href="#expertise" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.expertise}</a>
        <a href="#parcours"  className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.parcours}</a>
        <a href="#contact"   className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.contact}</a>
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleLang}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-slate-600 dark:text-slate-300"
          aria-label="Changer la langue"
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-slate-600 dark:text-slate-300"
          aria-label="Basculer le thème"
        >
          {theme === 'dark'
            ? <Moon className="w-4 h-4" strokeWidth={1.5} />
            : <Sun className="w-4 h-4" strokeWidth={1.5} />
          }
        </button>
      </div>
    </header>
  )
}
