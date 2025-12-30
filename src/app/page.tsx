import { Dashboard } from '@/components/Dashboard'

export default function Home() {
  return (
    <div className="min-h-screen bg-mesh">
      {/* Header */}
      <header className="relative border-b border-[var(--slate-800)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--slate-900)] via-transparent to-[var(--slate-900)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="animate-slide-in-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--amber-400)] to-[var(--amber-500)] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-[var(--slate-950)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--amber-400)]">
                  Virginia Electoral Reform
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-[var(--slate-100)]">RCV Support</span>
                <br />
                <span className="bg-gradient-to-r from-[var(--amber-300)] via-[var(--amber-400)] to-[var(--amber-500)] bg-clip-text text-transparent">
                  Tracker
                </span>
              </h1>
              <p className="mt-4 text-lg text-[var(--slate-400)] max-w-xl leading-relaxed">
                Track where Virginia&apos;s elected officials stand on Ranked Choice Voting reform.
                Real-time data from legislative records.
              </p>
            </div>

            <div className="animate-fade-in-up delay-2 flex flex-col items-start lg:items-end gap-2">
              <div className="flex items-center gap-2 text-sm text-[var(--slate-400)]">
                <span className="w-2 h-2 rounded-full bg-[var(--support)] animate-pulse" />
                <span>Live data from Virginia LIS</span>
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://www.fairvoteva.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--amber-400)] hover:text-[var(--amber-300)] transition-colors"
                >
                  FairVote Virginia →
                </a>
                <a
                  href="https://github.com/maxghenis/virginia-rcv-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--slate-400)] hover:text-[var(--slate-300)] transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Dashboard />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--slate-800)] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--slate-500)]">
            <p>
              Data sourced from Virginia Legislative Information System, VPAP, and FairVote Virginia
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://lis.virginia.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--slate-300)] transition-colors"
              >
                Virginia LIS
              </a>
              <a
                href="https://www.vpap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--slate-300)] transition-colors"
              >
                VPAP
              </a>
              <a
                href="https://www.rankedchoiceva.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--slate-300)] transition-colors"
              >
                Ranked Choice VA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
