import React, { useEffect, useState } from 'react'


import { Logo } from './TopNavigation/Logo'
import { Burger } from './TopNavigation/Burger'
import { List } from './TopNavigation/List'
// import { routeLinks } from '../config/routing'



const TopMenu = [
    { link: routeLinks.aboutUs(), title: 'why us' },
    
  ]

export const TopNavigation = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const [isScrolledDown, setIsScrolledDown] = useState(false)
  
    useEffect(() => {
      const scrollListener = () => {
        if (window.scrollY > 10 && !isScrolledDown) {
          setIsScrolledDown(true)
        } else {
          setIsScrolledDown(false)
        }
      }
      document.addEventListener('scroll', scrollListener)
      return () => {
        document.removeEventListener('scroll', scrollListener)
      }
    }, [])
  
    const toggleMenu = () => {
      const newValue = !menuOpened
      setMenuOpened(newValue)
      toggled(newValue)
    }
    return (
        <nav
        className={classNames('navbar is-fixed-top', styles.container, {
          [styles.hasShadow]: isScrolledDown,
        })}
        role='navigation'
        aria-label='main navigation'
      >
        <Logo />
        <Burger opened={menuOpened} toggle={toggleMenu} />
        <List opened={menuOpened} elements={TopMenu} currentPath={path || ''} />
      </nav>

    )
}