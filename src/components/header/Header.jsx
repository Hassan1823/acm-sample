import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: "Home",
        href: "/home"
    },
    {
        id: 2,
        title: "Anti-Hacker Software",
        href: "/home"
    },
    {
        id: 3,
        title: "Our Services",
        href: "/ourServices"
    }
]

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Link href="/home" className={styles.logo}>ACM</Link>
      <div className={styles.links}>
        {links.map(link=>(
            <Link  key={link.id} href={link.href} className={styles.link}>{link.title}</Link>
        ))}
      </div>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}

export default Header
