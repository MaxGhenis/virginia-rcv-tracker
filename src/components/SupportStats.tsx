import type { SupportLevel } from '@/types/official'

type Stats = Record<SupportLevel, number>

interface SupportStatsProps {
  stats: Stats
}

const statConfig: Record<SupportLevel, { label: string; shortLabel: string; color: string; bgColor: string }> = {
  strong_support: {
    label: 'Strong Support',
    shortLabel: 'Strong',
    color: 'var(--support-strong)',
    bgColor: 'var(--support-strong-bg)'
  },
  supportive: {
    label: 'Supportive',
    shortLabel: 'Support',
    color: 'var(--support)',
    bgColor: 'var(--support-bg)'
  },
  unknown: {
    label: 'Unknown',
    shortLabel: 'Unknown',
    color: 'var(--unknown)',
    bgColor: 'var(--unknown-bg)'
  },
  opposed: {
    label: 'Opposed',
    shortLabel: 'Oppose',
    color: 'var(--oppose)',
    bgColor: 'var(--oppose-bg)'
  },
  strong_opposition: {
    label: 'Strong Opposition',
    shortLabel: 'Strong',
    color: 'var(--oppose-strong)',
    bgColor: 'var(--oppose-strong-bg)'
  },
}

export function SupportStats({ stats }: SupportStatsProps) {
  const total = Object.values(stats).reduce((sum, count) => sum + count, 0)
  const supportive = stats.strong_support + stats.supportive
  const supportPercentage = total > 0 ? Math.round((supportive / total) * 100) : 0

  const orderedLevels: SupportLevel[] = ['strong_support', 'supportive', 'unknown', 'opposed', 'strong_opposition']

  return (
    <div className="animate-fade-in-up delay-1">
      {/* Hero Stats */}
      <div className="border-gradient p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Main Percentage */}
          <div className="flex items-baseline gap-4">
            <div className="relative">
              <span
                className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-[var(--support)] to-[var(--support-strong)] bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {supportPercentage}
              </span>
              <span className="text-3xl lg:text-4xl font-bold text-[var(--slate-400)]">%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[var(--slate-200)]">Support RCV</span>
              <span className="text-sm text-[var(--slate-500)]">
                {supportive} of {total} officials
              </span>
            </div>
          </div>

          {/* Progress Visualization */}
          <div className="flex-1 max-w-xl">
            <div className="flex justify-between text-xs text-[var(--slate-500)] mb-2">
              <span>Support</span>
              <span>Opposition</span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={supportPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-6 rounded-full overflow-hidden bg-[var(--slate-800)] flex shadow-inner"
            >
              {orderedLevels.map((level) => {
                const count = stats[level]
                const width = total > 0 ? (count / total) * 100 : 0
                if (width === 0) return null
                return (
                  <div
                    key={level}
                    className="h-full transition-all duration-700 ease-out first:rounded-l-full last:rounded-r-full"
                    style={{
                      width: `${width}%`,
                      backgroundColor: statConfig[level].color,
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {orderedLevels.map((level, index) => {
          const config = statConfig[level]
          const count = stats[level]
          const percentage = total > 0 ? Math.round((count / total) * 100) : 0

          return (
            <div
              key={level}
              className={`
                group relative overflow-hidden rounded-xl p-4
                bg-[var(--slate-900)] border border-[var(--slate-800)]
                hover:border-[var(--slate-700)] transition-all duration-300
                animate-count-up
              `}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${config.color}15, transparent 70%)`
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: config.color }}
                  />
                  <span className="text-xs font-medium text-[var(--slate-400)] uppercase tracking-wide">
                    {config.shortLabel}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: config.color, fontFamily: 'var(--font-display)' }}
                  >
                    {count}
                  </span>
                  <span className="text-sm text-[var(--slate-500)]">
                    ({percentage}%)
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
