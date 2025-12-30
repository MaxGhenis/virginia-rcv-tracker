import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SupportStats } from './SupportStats'

const mockStats = {
  strong_support: 5,
  supportive: 10,
  unknown: 80,
  opposed: 3,
  strong_opposition: 2,
}

describe('SupportStats', () => {
  it('renders total count in context', () => {
    render(<SupportStats stats={mockStats} />)
    // 15 of 100 officials (supportive count and total)
    expect(screen.getByText(/15 of 100 officials/)).toBeInTheDocument()
  })

  it('renders support percentage', () => {
    render(<SupportStats stats={mockStats} />)
    // 15/100 = 15% supportive
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
  })

  it('renders progress bar', () => {
    render(<SupportStats stats={mockStats} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('shows breakdown of support levels', () => {
    render(<SupportStats stats={mockStats} />)
    // Check that the stat values are displayed
    expect(screen.getByText('5')).toBeInTheDocument() // strong support
    expect(screen.getByText('10')).toBeInTheDocument() // supportive
    expect(screen.getByText('80')).toBeInTheDocument() // unknown
  })
})
