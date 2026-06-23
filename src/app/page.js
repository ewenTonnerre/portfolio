import AmbientBg from '@/components/AmbientBg'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <>
      <AmbientBg />
      <Header />
      <Hero />
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-24 py-16 flex flex-col gap-32 relative z-10">
        <Expertise />
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Experience />
          <Projects />
        </section>
        <Contact />
      </div>
    </>
  )
}
