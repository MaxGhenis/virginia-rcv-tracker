import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SupportBadge } from './SupportBadge'

describe('SupportBadge', () => {
  it('renders strong support with correct label', () => {
    render(<SupportBadge level="strong_support" />)
    expect(screen.getByText('Strong Support')).toBeInTheDocument()
  })

  it('renders supportive with correct label', () => {
    render(<SupportBadge level="supportive" />)
    expect(screen.getByText('Supportive')).toBeInTheDocument()
  })

  it('renders unknown with correct label', () => {
    render(<SupportBadge level="unknown" />)
    expect(screen.getByText('Unknown')).toBeInTheDocument()
  })

  it('renders opposed with correct label', () => {
    render(<SupportBadge level="opposed" />)
    expect(screen.getByText('Opposed')).toBeInTheDocument()
  })

  it('renders strong opposition with correct label', () => {
    render(<SupportBadge level="strong_opposition" />)
    expect(screen.getByText('Strong Opposition')).toBeInTheDocument()
  })
})
