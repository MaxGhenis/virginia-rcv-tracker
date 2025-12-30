import type { SupportLevel } from '@/types/official'

interface SupportBadgeProps {
  level: SupportLevel
  size?: 'sm' | 'md'
}

const supportConfig: Record<SupportLevel, { label: string; color: string; bgColor: string; icon: string }> = {
  strong_support: {
    label: 'Strong Support',
    color: 'var(--support-strong)',
    bgColor: 'rgba(5, 150, 105, 0.15)',
    icon: '✓✓',
  },
  supportive: {
    label: 'Supportive',
    color: 'var(--support)',
    bgColor: 'rgba(16, 185, 129, 0.15)',
    icon: '✓',
  },
  unknown: {
    label: 'Unknown',
    color: 'var(--unknown)',
    bgColor: 'rgba(107, 114, 128, 0.15)',
    icon: '?',
  },
  opposed: {
    label: 'Opposed',
    color: 'var(--oppose)',
    bgColor: 'rgba(239, 68, 68, 0.15)',
    icon: '✗',
  },
  strong_opposition: {
    label: 'Strong Opposition',
    color: 'var(--oppose-strong)',
    bgColor: 'rgba(220, 38, 38, 0.15)',
    icon: '✗✗',
  },
}

export function SupportBadge({ level, size = 'md' }: SupportBadgeProps) {
  const config = supportConfig[level]
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-semibold rounded-full
        border transition-all duration-200
        ${sizeClasses}
      `}
      style={{
        color: config.color,
        backgroundColor: config.bgColor,
        borderColor: `color-mix(in srgb, ${config.color} 30%, transparent)`,
      }}
    >
      <span className="text-[0.7em] opacity-80">{config.icon}</span>
      {config.label}
    </span>
  )
}
