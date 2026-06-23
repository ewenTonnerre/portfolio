import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Ewen Tonnerre — Ingénieur IA & Développeur Fullstack',
  description:
    'Portfolio d\'Ewen Tonnerre, Développeur Fullstack, Mobile et orienté IA. Disponible sur Bordeaux.',
  keywords: [
    'Ewen Tonnerre',
    'ingénieur IA',
    'développeur fullstack',
    'intelligence artificielle',
    'développeur React',
    'développeur Next.js',
    'machine learning',
    'data science',
    'statistiques appliquées',
    'développeur freelance France',
    'portfolio développeur',
  ],
  authors: [{ name: 'Ewen Tonnerre', url: 'https://ewen-tonnerre.netlify.app' }],
  creator: 'Ewen Tonnerre',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ewen Tonnerre',
  url: 'https://ewen-tonnerre.netlify.app',
  jobTitle: 'Développeur Fullstack, Mobile & orienté IA',
  description:
    'Développeur Fullstack, Mobile et orienté IA. Disponible sur Bordeaux.',
  knowsAbout: [
    'Intelligence Artificielle',
    'Développement Fullstack',
    'React',
    'Next.js',
    'Laravel',
    'Node.js',
    'Mobile Development',
    'Machine Learning',
    'Statistiques',
    'Python',
    'TypeScript',
  ],
  sameAs: [
    'https://github.com/ewen-tonnerre',
    'https://linkedin.com/in/ewen-tonnerre',
  ],
  nationality: { '@type': 'Country', name: 'France' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden relative flex flex-col bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white transition-colors duration-500">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
