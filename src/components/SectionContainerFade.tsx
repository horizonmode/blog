'use client'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolling(window.scrollY > 10)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll)
    }

    setScrolling(window.scrollY > 10)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`w-full bg-opacity-85 ${scrolling && 'bg-white dark:bg-offsetGray'}`}>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">{children}</section>
    </div>
  )
}
