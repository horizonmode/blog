interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Blitz: A Digital-First Gym',
    description: `A digital-first gym with screen-based HIIT classes.`,
    imgSrc: '/static/images/gym.jpeg',
    href: '/blog/blitz-gym',
  },
]

export default projectsData
