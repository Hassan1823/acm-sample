import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.inner1}>
        <p className={styles.desc}>Copyright © 2023 CyLock</p>
      </div>
      <div className={styles.inner2}>
      <div className={styles.socialMediaIcons}>
          <Link href='/https://www.linkedin.com/'> <Image src='/facebook.svg' width={32} height={32} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/linkedin.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/twitter.svg' width={34} height={34} className={styles.facebook} alt='Image Loading Error'/> </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
