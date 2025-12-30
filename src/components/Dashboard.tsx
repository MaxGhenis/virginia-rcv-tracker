'use client'

import { useState, useMemo } from 'react'
import type { Chamber, Party, SupportLevel } from '@/types/official'
import { filterOfficials, getSupportStats } from '@/lib/officials'
import { SupportStats } from './SupportStats'
import { FilterControls } from './FilterControls'
import { OfficialCard } from './OfficialCard'

export function Dashboard() {
  const [chamber, setChamber] = useState<Chamber | 'all'>('all')
  const [party, setParty] = useState<Party | 'all'>('all')
  const [support, setSupport] = useState<SupportLevel | 'all'>('all')

  const officials = useMemo(() => {
    const filters: Parameters<typeof filterOfficials>[0] = {}
    if (chamber !== 'all') filters.chamber = chamber
    if (party !== 'all') filters.party = party
    if (support !== 'all') filters.rcvSupport = support
    return filterOfficials(filters)
  }, [chamber, party, support])

  const stats = useMemo(() => {
    const filters: Parameters<typeof getSupportStats>[0] = {}
    if (chamber !== 'all') filters.chamber = chamber
    if (party !== 'all') filters.party = party
    return getSupportStats(filters)
  }, [chamber, party])

  return (
    <div>
      <SupportStats stats={stats} />

      <FilterControls
        chamber={chamber}
        party={party}
        support={support}
        onChamberChange={setChamber}
        onPartyChange={setParty}
        onSupportChange={setSupport}
      />

      {/* Results count */}
      <div className="flex items-center justify-between mb-6 animate-fade-in-up delay-4">
        <h2
          className="text-xl font-bold text-[var(--slate-200)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Officials
        </h2>
        <span className="text-sm text-[var(--slate-500)]">
          Showing {officials.length} result{officials.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Officials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {officials.map((official, index) => (
          <OfficialCard key={official.id} official={official} index={index} />
        ))}
      </div>

      {officials.length === 0 && (
        <div className="text-center py-16 animate-fade-in-up">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--slate-800)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--slate-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--slate-400)] mb-2">No officials found</h3>
          <p className="text-sm text-[var(--slate-600)]">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  )
}
