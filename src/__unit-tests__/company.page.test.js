import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/(company)/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
  it('renders the hero image', () => {
    render(<Page />)
    const hero = screen.getByAltText('canary')
    expect(hero).toBeInTheDocument()
  })
  it('renders the contact form', () => {
    render(<Page />)
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()
  })
})
