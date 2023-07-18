import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Header/>
    <div className={styles.container}>
    <p className={styles.title}>Welcome to ACM</p>
    <div className={styles.inner}>
      <span className={styles.span}>
        <Image
          width={100}
          height={100}
          alt="dfh"
          src="/rocket.svg"
          className={styles.robot}
        />
      </span>
      <h1 className={styles.heading}>
        Cyber Security and anti-hacker Services
      </h1>
      <div className={styles.bgGradient}></div>
      <div className={styles.bgGradient2}></div>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim
        nemo velit quidem aspernatur.
      </p>
    </div>
    <div className={styles.divContainer}>
      <div className={styles.divContainer1}>
        <div className={styles.div1}>
          <div className={styles.inner1}>
            <div>
              <Image
                width={100}
                height={100}
                alt="ssdsd"
                src="/antihacker.svg"
                className={styles.antihacking}
              />
            </div>
          </div>
          <div className={styles.inner2}>
            <h1 className={styles.title2}>
              Anti-hacker software for your business network
            </h1>
            <p className={styles.desc}>
              Verified Vulnerability Assessments and Penetration Tests on
              URL/IP addresses and servers
            </p>
          </div>
        </div>

        <div className={styles.div2}>
          <div className={styles.inner1}>
            <span className={styles.span2}>
              <Image
                width={100}
                height={100}
                alt="dsds"
                src="/antiphishing.svg"
                className={styles.antiPhishing}
              />{" "}
            </span>
          </div>
          <div className={styles.inner2}>
            <h1 className={styles.title2}>Anti-Phishing</h1>
            <p className={styles.desc}>
              Cyber Security Awareness to prevent advanced email-based
              threats
            </p>
          </div>
        </div>
      </div>

      <div className={styles.divContainer2}>
        <h1 className={styles.title2}>
          Certified VAPT testing for ISO 27001
        </h1>
        <p className={styles.desc}>
          Documentary evidence required for ISO certification and for Art.
          32 of the GDPR
        </p>
        <div className={styles.graph}>
          <Image
            width={160}
            height={110}
            alt="rdfd"
            src="/VAPT.svg"
            className={styles.certificate}
          />
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Home