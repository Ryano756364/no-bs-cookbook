import React from 'react'
import { FcStatistics, FcLike, FcGlobe } from 'react-icons/fc'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'recipes',
    url: '/recipes',
  }
]

export const services = [
  {
    id: 1,
    icon: <FcStatistics />,
    title: 'mission',
    text:
      'Type the mission of the site here',
  },
  {
    id: 2,
    icon: <FcLike />,
    title: 'vision',
    text:
      'Type the vision of the site here. To watch people become healthier.',
  },
  {
    id: 3,
    icon: <FcGlobe />,
    title: 'history',
    text:
      'Type the history of the site here',
  },
]
