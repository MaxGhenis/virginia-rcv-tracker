import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SupportBadge } from './SupportBadge'

describe('SupportBadge', () => {
  it('renders strong support with correct styling', () => {
    render(<SupportBadge level="strong_support" />)
    const badge = screen.getByText('Strong Support')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-green-600')
  })

  it('renders supportive with correct styling', () => {
    render(<SupportBadge level="supportive" />)
    const badge = screen.getByText('Supportive')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-green-400')
  })

  it('renders unknown with correct styling', () => {
    render(<SupportBadge level="unknown" />)
    const badge = screen.getByText('Unknown')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-gray-400')
  })

  it('renders opposed with correct styling', () => {
    render(<SupportBadge level="opposed" />)
    const badge = screen.getByText('Opposed')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-red-400')
  })

  it('renders strong opposition with correct styling', () => {
    render(<SupportBadge level="strong_opposition" />)
    const badge = screen.getByText('Strong Opposition')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-red-600')
  })
})
