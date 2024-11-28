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
  {
    title: 'International Rubgy Experience x OMM',
    description: `An immersive museum experience on the history of Rugby.`,
    imgSrc: '/static/images/ire.jpg',
    href: '/blog/international-rugby-experience',
  },
]

export default projectsData
