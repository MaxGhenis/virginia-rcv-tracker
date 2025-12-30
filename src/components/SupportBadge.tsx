import type { SupportLevel } from '@/types/official'

interface SupportBadgeProps {
  level: SupportLevel
}

const supportConfig: Record<SupportLevel, { label: string; className: string }> = {
  strong_support: {
    label: 'Strong Support',
    className: 'bg-green-600 text-white',
  },
  supportive: {
    label: 'Supportive',
    className: 'bg-green-400 text-white',
  },
  unknown: {
    label: 'Unknown',
    className: 'bg-gray-400 text-white',
  },
  opposed: {
    label: 'Opposed',
    className: 'bg-red-400 text-white',
  },
  strong_opposition: {
    label: 'Strong Opposition',
    className: 'bg-red-600 text-white',
  },
}

export function SupportBadge({ level }: SupportBadgeProps) {
  const config = supportConfig[level]
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  )
}
