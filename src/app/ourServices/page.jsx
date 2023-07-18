'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const OurServices = () => {
  return (
    <div className={styles.mainContainer1}>
        <Header/>
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.title}>Cyber security and anti-hacker services</h1>
            <div className={styles.center}>
            <div className={styles.firstRow}>
                <div className={styles.antihacker}>
                    <Image src='/antihacker.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h3 className={styles.heading}>Anti-hacker software for your business network</h3>
                    <div className={styles.paragraph}>

                    <p className={styles.desc}>Verified Vulnerability Assessments and Penetration Tests on URL/IP addresses and servers</p>
                    </div>
                </div>
                <div className={styles.antiphishing}>
                <Image src='/antiphishing.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h3 className={styles.heading}>Anti-Phishing</h3>
                    <div className={styles.paragraph2}>

                    <p className={styles.desc}>Cyber Security Awareness to prevent advanced email-based threats</p>
                    </div>
                </div>
            </div>

            <div className={styles.secRow}>
                <div className={styles.antihacker2}>
                    <Image src='/cyber.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h3 className={styles.heading}>Cyber threat intelligence</h3>
                    <div className={styles.paragraph2}>

                    <p className={styles.desc}>We find out if your data has already been stolen and if it is for sale on the dark web.</p>
                    </div>
                </div>
                <div className={styles.antiphishing2}>
                <Image src='/VAPT.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h3 className={styles.heading}>Certified VAPT testing for ISO 27001</h3>
                    <div className={styles.paragraph2}>

                    <p className={styles.desc}>Documentary evidence required for ISO certification and for Art. 32 of the GDPR</p>
                    </div>
                </div>
            </div>

            <div className={styles.thirdRow}>
                <div className={styles.antihacker3}>
                    <Image src='/dataBreach.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h3 className={styles.heading}>Customised Data Breach Management</h3>
                    <div className={styles.paragraph2}>
                    <p className={styles.desc}>A security plan explaining what to do in the event of a data breach</p>
                    </div>
                </div>
                <div className={styles.antiphishing3}>
                <Image src='/penetration.svg' className={styles.image} width={80} height={80} alt='Image Loading Error'/>
                    <h4 className={styles.heading}>Customised penetration tests</h4>
                    <div className={styles.paragraph2}>

                    <p className={styles.desc}>A customized PT on the IT system to find all weaknesses.</p>
                    </div>
                </div>
            </div>
            
            <button className={styles.button}>Contact Us</button>
            </div>

        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default OurServices
