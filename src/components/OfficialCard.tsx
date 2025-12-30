import type { Official, Chamber } from '@/types/official'
import { SupportBadge } from './SupportBadge'

interface OfficialCardProps {
  official: Official
}

const chamberLabels: Record<Chamber, string> = {
  senate: 'Senate',
  house: 'House of Delegates',
  statewide: 'Statewide',
}

export function OfficialCard({ official }: OfficialCardProps) {
  const chamberLabel = chamberLabels[official.chamber]
  const evidenceCount = official.supportEvidence.length

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{official.name}</h3>
          <p className="text-sm text-gray-600">
            {chamberLabel}
            {official.district && ` - District ${official.district}`}{' '}
            <span className="font-medium">({official.party})</span>
          </p>
        </div>
        <SupportBadge level={official.rcvSupport} />
      </div>
      {evidenceCount > 0 && (
        <p className="text-xs text-gray-500 mt-2">
          {evidenceCount} evidence item{evidenceCount !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}
