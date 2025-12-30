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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {officials.map((official) => (
          <OfficialCard key={official.id} official={official} />
        ))}
      </div>
      {officials.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No officials match the selected filters.
        </div>
      )}
    </div>
  )
}
