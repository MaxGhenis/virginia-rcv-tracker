import { describe, it, expect } from 'vitest'
import {
  getOfficials,
  getOfficialById,
  filterOfficials,
  getSupportStats
} from './officials'

describe('getOfficials', () => {
  it('returns an array of officials', () => {
    const officials = getOfficials()
    expect(Array.isArray(officials)).toBe(true)
    expect(officials.length).toBeGreaterThan(0)
  })

  it('each official has required fields', () => {
    const officials = getOfficials()
    officials.forEach((official) => {
      expect(official).toHaveProperty('id')
      expect(official).toHaveProperty('name')
      expect(official).toHaveProperty('chamber')
      expect(official).toHaveProperty('party')
      expect(official).toHaveProperty('rcvSupport')
    })
  })
})

describe('getOfficialById', () => {
  it('returns the correct official', () => {
    const officials = getOfficials()
    const firstOfficial = officials[0]
    const found = getOfficialById(firstOfficial.id)
    expect(found).toEqual(firstOfficial)
  })

  it('returns undefined for non-existent id', () => {
    const found = getOfficialById('non-existent-id')
    expect(found).toBeUndefined()
  })
})

describe('filterOfficials', () => {
  it('filters by chamber', () => {
    const senate = filterOfficials({ chamber: 'senate' })
    senate.forEach((official) => {
      expect(official.chamber).toBe('senate')
    })
  })

  it('filters by party', () => {
    const democrats = filterOfficials({ party: 'D' })
    democrats.forEach((official) => {
      expect(official.party).toBe('D')
    })
  })

  it('filters by support level', () => {
    const supporters = filterOfficials({ rcvSupport: 'supportive' })
    supporters.forEach((official) => {
      expect(official.rcvSupport).toBe('supportive')
    })
  })

  it('combines multiple filters', () => {
    const democraticSenateSupporters = filterOfficials({
      chamber: 'senate',
      party: 'D',
      rcvSupport: 'supportive',
    })
    democraticSenateSupporters.forEach((official) => {
      expect(official.chamber).toBe('senate')
      expect(official.party).toBe('D')
      expect(official.rcvSupport).toBe('supportive')
    })
  })
})

describe('getSupportStats', () => {
  it('returns counts for each support level', () => {
    const stats = getSupportStats()
    expect(stats).toHaveProperty('strong_support')
    expect(stats).toHaveProperty('supportive')
    expect(stats).toHaveProperty('unknown')
    expect(stats).toHaveProperty('opposed')
    expect(stats).toHaveProperty('strong_opposition')
  })

  it('counts sum to total officials', () => {
    const stats = getSupportStats()
    const officials = getOfficials()
    const total = Object.values(stats).reduce((sum, count) => sum + count, 0)
    expect(total).toBe(officials.length)
  })

  it('can filter stats by chamber', () => {
    const senateStats = getSupportStats({ chamber: 'senate' })
    const senateOfficials = filterOfficials({ chamber: 'senate' })
    const total = Object.values(senateStats).reduce((sum, count) => sum + count, 0)
    expect(total).toBe(senateOfficials.length)
  })
})
