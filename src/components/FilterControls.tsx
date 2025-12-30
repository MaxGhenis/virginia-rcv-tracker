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
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Filter Officials</h3>
      <div className="flex flex-wrap gap-4">
        <div>
          <label htmlFor="chamber-filter" className="block text-xs text-gray-500 mb-1">
            Chamber
          </label>
          <select
            id="chamber-filter"
            value={chamber}
            onChange={(e) => onChamberChange(e.target.value as Chamber | 'all')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          >
            <option value="all">All Chambers</option>
            <option value="senate">Senate</option>
            <option value="house">House of Delegates</option>
            <option value="statewide">Statewide</option>
          </select>
        </div>

        <div>
          <label htmlFor="party-filter" className="block text-xs text-gray-500 mb-1">
            Party
          </label>
          <select
            id="party-filter"
            value={party}
            onChange={(e) => onPartyChange(e.target.value as Party | 'all')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          >
            <option value="all">All Parties</option>
            <option value="D">Democrat</option>
            <option value="R">Republican</option>
            <option value="I">Independent</option>
          </select>
        </div>

        <div>
          <label htmlFor="support-filter" className="block text-xs text-gray-500 mb-1">
            RCV Support
          </label>
          <select
            id="support-filter"
            value={support}
            onChange={(e) => onSupportChange(e.target.value as SupportLevel | 'all')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          >
            <option value="all">All Levels</option>
            <option value="strong_support">Strong Support</option>
            <option value="supportive">Supportive</option>
            <option value="unknown">Unknown</option>
            <option value="opposed">Opposed</option>
            <option value="strong_opposition">Strong Opposition</option>
          </select>
        </div>
      </div>
    </div>
  )
}
