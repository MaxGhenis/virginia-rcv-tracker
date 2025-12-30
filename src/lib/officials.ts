import type { Official, SupportLevel, Chamber, Party } from '@/types/official'
import officialsData from '@/data/officials.json'

export function getOfficials(): Official[] {
  return officialsData as Official[]
}

export function getOfficialById(id: string): Official | undefined {
  return getOfficials().find((official) => official.id === id)
}

export interface FilterOptions {
  chamber?: Chamber
  party?: Party
  rcvSupport?: SupportLevel
}

export function filterOfficials(options: FilterOptions): Official[] {
  let officials = getOfficials()

  if (options.chamber) {
    officials = officials.filter((o) => o.chamber === options.chamber)
  }

  if (options.party) {
    officials = officials.filter((o) => o.party === options.party)
  }

  if (options.rcvSupport) {
    officials = officials.filter((o) => o.rcvSupport === options.rcvSupport)
  }

  return officials
}

export type SupportStats = Record<SupportLevel, number>

export function getSupportStats(options: FilterOptions = {}): SupportStats {
  const officials = Object.keys(options).length > 0
    ? filterOfficials(options)
    : getOfficials()

  const stats: SupportStats = {
    strong_support: 0,
    supportive: 0,
    unknown: 0,
    opposed: 0,
    strong_opposition: 0,
  }

  officials.forEach((official) => {
    stats[official.rcvSupport]++
  })

  return stats
}
