import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

describe('Page', () => {
  it('renders a heading', async () => {
    const PageResolved = await resolvedComponent(Page)
    render(<PageResolved />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
