"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import { HiMenuAlt3 } from "react-icons/hi"
import { useState } from "react"

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
        <Link href="/" translate="no" className={styles.logo}>Movies</Link>

        <span className={styles.desktopMenu}>
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/tv">TV Shows</Link>
            <Link href="/people">People</Link>
            <Link href="/favorites">My Favorites</Link>
        </span>

        <HiMenuAlt3 className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
        
        
        {isOpen && (
          <span className={styles.mobileMenu}>
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/tv">TV Shows</Link>
            <Link href="/people">People</Link>
            <Link href="/favorites">My Favorites</Link>
          </span>          
        )}
    </nav>
  )
}

export default NavBar