'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

const AppContext = createContext({
  lang: 'en',
  theme: 'dark',
  t: translations.en,
  toggleLang: () => {},
  toggleTheme: () => {},
})

export function AppProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleLang = () => setLang(l => (l === 'en' ? 'fr' : 'en'))
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <AppContext.Provider value={{ lang, theme, t: translations[lang], toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
