export default function AmbientBg() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
      }}
    >
      <div className="absolute top-0 left-[15%] w-[20%] h-full bg-fuchsia-600/10 dark:bg-fuchsia-600/20 blur-[120px] transition-colors duration-500" />
      <div className="absolute top-0 left-[65%] w-[20%] h-full bg-cyan-600/10 dark:bg-cyan-600/20 blur-[120px] transition-colors duration-500" />
      <svg
        className="absolute top-0 left-0 w-full h-[200%] opacity-70 dark:opacity-100 mix-blend-screen"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <path d="M 250 0 Q 450 125 250 250 T 250 500 T 250 750 T 250 1000" stroke="#d946ef" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" style={{ animation: 'flow-up 25s linear infinite' }} />
        <path d="M 750 0 Q 950 125 750 250 T 750 500 T 750 750 T 750 1000" stroke="#22d3ee" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" style={{ animation: 'flow-up 25s linear infinite 4s' }} />
      </svg>
    </div>
  )
}
