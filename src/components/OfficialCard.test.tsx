import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfficialCard } from './OfficialCard'
import type { Official } from '@/types/official'

const mockOfficial: Official = {
  id: 'test-001',
  name: 'John Smith',
  chamber: 'senate',
  district: '15',
  party: 'D',
  rcvSupport: 'supportive',
  supportEvidence: [
    {
      type: 'bill_cosponsor',
      date: '2024-01-15',
      description: 'Co-sponsored RCV legislation',
    },
  ],
}

describe('OfficialCard', () => {
  it('renders official name', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('renders district information', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText(/District 15/)).toBeInTheDocument()
  })

  it('renders party affiliation', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText('(D)')).toBeInTheDocument()
  })

  it('renders chamber', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText(/Senate/)).toBeInTheDocument()
  })

  it('renders support badge', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText('Supportive')).toBeInTheDocument()
  })

  it('renders support evidence count', () => {
    render(<OfficialCard official={mockOfficial} />)
    expect(screen.getByText(/1 evidence/)).toBeInTheDocument()
  })

  it('handles statewide officials without district', () => {
    const statewide: Official = {
      ...mockOfficial,
      chamber: 'statewide',
      district: undefined,
    }
    render(<OfficialCard official={statewide} />)
    expect(screen.getByText(/Statewide/)).toBeInTheDocument()
  })
})
