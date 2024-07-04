'use client'
import RSS from '../public/static/images/rss.svg'

const RssIcon = () => {
  const navigateToRss = () => {
    window.location.href = '/feed.xml'
  }
  return (
    <button onClick={navigateToRss} aria-label="Toggle Dark Mode">
      <RSS className="h-6 w-6 text-gray-900 dark:text-gray-100" />
    </button>
  )
}

export default RssIcon
