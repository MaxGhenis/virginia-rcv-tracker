import type { SupportLevel } from '@/types/official'

type Stats = Record<SupportLevel, number>

interface SupportStatsProps {
  stats: Stats
}

export function SupportStats({ stats }: SupportStatsProps) {
  const total = Object.values(stats).reduce((sum, count) => sum + count, 0)
  const supportive = stats.strong_support + stats.supportive
  const supportPercentage = total > 0 ? Math.round((supportive / total) * 100) : 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">RCV Support Overview</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <div className="text-center p-3 bg-green-600 text-white rounded-lg">
          <div className="text-2xl font-bold">{stats.strong_support}</div>
          <div className="text-sm">Strong Support</div>
        </div>
        <div className="text-center p-3 bg-green-400 text-white rounded-lg">
          <div className="text-2xl font-bold">{stats.supportive}</div>
          <div className="text-sm">Supportive</div>
        </div>
        <div className="text-center p-3 bg-gray-400 text-white rounded-lg">
          <div className="text-2xl font-bold">{stats.unknown}</div>
          <div className="text-sm">Unknown</div>
        </div>
        <div className="text-center p-3 bg-red-400 text-white rounded-lg">
          <div className="text-2xl font-bold">{stats.opposed}</div>
          <div className="text-sm">Opposed</div>
        </div>
        <div className="text-center p-3 bg-red-600 text-white rounded-lg">
          <div className="text-2xl font-bold">{stats.strong_opposition}</div>
          <div className="text-sm">Strong Opposition</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{supportive} supportive of {total} total officials</span>
          <span>{supportPercentage}% support</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={supportPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden"
        >
          <div className="h-full flex">
            <div
              className="bg-green-600 transition-all"
              style={{ width: `${(stats.strong_support / total) * 100}%` }}
            />
            <div
              className="bg-green-400 transition-all"
              style={{ width: `${(stats.supportive / total) * 100}%` }}
            />
            <div
              className="bg-gray-400 transition-all"
              style={{ width: `${(stats.unknown / total) * 100}%` }}
            />
            <div
              className="bg-red-400 transition-all"
              style={{ width: `${(stats.opposed / total) * 100}%` }}
            />
            <div
              className="bg-red-600 transition-all"
              style={{ width: `${(stats.strong_opposition / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
