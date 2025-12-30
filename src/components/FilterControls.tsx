'use client'

import type { Chamber, Party, SupportLevel } from '@/types/official'

interface FilterControlsProps {
  chamber: Chamber | 'all'
  party: Party | 'all'
  support: SupportLevel | 'all'
  onChamberChange: (chamber: Chamber | 'all') => void
  onPartyChange: (party: Party | 'all') => void
  onSupportChange: (support: SupportLevel | 'all') => void
}

export function FilterControls({
  chamber,
  party,
  support,
  onChamberChange,
  onPartyChange,
  onSupportChange,
}: FilterControlsProps) {
  const selectBaseClass = `
    appearance-none w-full px-4 py-3 pr-10
    bg-[var(--slate-900)] border border-[var(--slate-700)]
    rounded-xl text-[var(--slate-200)] text-sm font-medium
    focus:outline-none focus:border-[var(--amber-500)] focus:ring-1 focus:ring-[var(--amber-500)]
    hover:border-[var(--slate-600)] transition-all duration-200
    cursor-pointer
  `

  const labelClass = "block text-xs font-semibold text-[var(--amber-400)] uppercase tracking-wider mb-2"

  return (
    <div className="animate-fade-in-up delay-3 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <svg className="w-5 h-5 text-[var(--slate-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="text-sm font-medium text-[var(--slate-400)]">Filter Officials</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative">
          <label htmlFor="chamber-filter" className={labelClass}>
            Chamber
          </label>
          <div className="relative">
            <select
              id="chamber-filter"
              value={chamber}
              onChange={(e) => onChamberChange(e.target.value as Chamber | 'all')}
              className={selectBaseClass}
            >
              <option value="all">All Chambers</option>
              <option value="senate">Senate</option>
              <option value="house">House of Delegates</option>
              <option value="statewide">Statewide</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[var(--slate-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="party-filter" className={labelClass}>
            Party
          </label>
          <div className="relative">
            <select
              id="party-filter"
              value={party}
              onChange={(e) => onPartyChange(e.target.value as Party | 'all')}
              className={selectBaseClass}
            >
              <option value="all">All Parties</option>
              <option value="D">Democrat</option>
              <option value="R">Republican</option>
              <option value="I">Independent</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[var(--slate-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="support-filter" className={labelClass}>
            RCV Position
          </label>
          <div className="relative">
            <select
              id="support-filter"
              value={support}
              onChange={(e) => onSupportChange(e.target.value as SupportLevel | 'all')}
              className={selectBaseClass}
            >
              <option value="all">All Positions</option>
              <option value="strong_support">Strong Support</option>
              <option value="supportive">Supportive</option>
              <option value="unknown">Unknown</option>
              <option value="opposed">Opposed</option>
              <option value="strong_opposition">Strong Opposition</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-[var(--slate-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
