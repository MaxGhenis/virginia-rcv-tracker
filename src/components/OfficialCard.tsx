import type { Official, Chamber } from '@/types/official'
import { SupportBadge } from './SupportBadge'

interface OfficialCardProps {
  official: Official
  index?: number
}

const chamberLabels: Record<Chamber, string> = {
  senate: 'Senate',
  house: 'House',
  statewide: 'Statewide',
}

const chamberColors: Record<Chamber, string> = {
  senate: 'var(--amber-400)',
  house: 'var(--slate-400)',
  statewide: 'var(--support)',
}

const partyColors: Record<string, { bg: string; text: string; border: string }> = {
  D: { bg: 'rgba(59, 130, 246, 0.1)', text: '#60a5fa', border: 'rgba(59, 130, 246, 0.3)' },
  R: { bg: 'rgba(239, 68, 68, 0.1)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)' },
  I: { bg: 'rgba(168, 85, 247, 0.1)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)' },
}

export function OfficialCard({ official, index = 0 }: OfficialCardProps) {
  const chamberLabel = chamberLabels[official.chamber]
  const evidenceCount = official.supportEvidence.length
  const partyStyle = partyColors[official.party] || partyColors.I

  return (
    <div
      className={`
        group relative overflow-hidden
        bg-[var(--slate-900)] border border-[var(--slate-800)]
        rounded-2xl p-5
        hover:border-[var(--slate-700)] hover:shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1
        animate-fade-in-scale
      `}
      style={{ animationDelay: `${0.05 * (index % 12)}s` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, var(--amber-500)08, transparent 60%)`
        }}
      />

      {/* Chamber indicator line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ backgroundColor: chamberColors[official.chamber] }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold text-[var(--slate-100)] truncate group-hover:text-[var(--amber-300)] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {official.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: chamberColors[official.chamber] }}
              >
                {chamberLabel}
              </span>
              {official.district && (
                <>
                  <span className="text-[var(--slate-600)]">•</span>
                  <span className="text-xs text-[var(--slate-500)]">
                    District {official.district}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Party Badge */}
          <div
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm border"
            style={{
              backgroundColor: partyStyle.bg,
              color: partyStyle.text,
              borderColor: partyStyle.border,
            }}
          >
            {official.party}
          </div>
        </div>

        {/* Support Badge */}
        <div className="mb-3">
          <SupportBadge level={official.rcvSupport} />
        </div>

        {/* Evidence */}
        {evidenceCount > 0 && (
          <div className="pt-3 border-t border-[var(--slate-800)]">
            <div className="flex items-center gap-2 text-xs text-[var(--slate-500)]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>
                {evidenceCount} evidence item{evidenceCount !== 1 ? 's' : ''}
              </span>
            </div>
            {official.supportEvidence[0] && (
              <p className="mt-2 text-xs text-[var(--slate-400)] line-clamp-2 leading-relaxed">
                {official.supportEvidence[0].description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
