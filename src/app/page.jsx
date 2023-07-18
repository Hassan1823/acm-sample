'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  const router = useRouter();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:''
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch ('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    })

    const userInfo = await response.json();

    console.log(userInfo);

    router.push('/login');
  }

  const password = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles.container}>
        <div className={styles.login}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Sign Up</h2>
            </div>
            <form action="" className={styles.form} onSubmit={registerUser}>
            <div className={styles.username}>
            <input type="text" name="" value={data.firstName} autoComplete="off" id="" className={styles.username2} onChange={(e)=> {setData({...data, firstName: e.target.value})}} placeholder='First name'/>
            <Image width={20} height={20} alt='' className={styles.password2} src='/password.svg'/>
            </div>

            <div className={styles.username}>
            <input type="text" name="" autoComplete="off" onChange={(e)=> {setData({...data, lastName: e.target.value})}} id="" value={data.lastName} className={styles.username2} placeholder='Last name'/>
            <Image width={20} height={20} alt='' className={styles.password2} src='/password.svg'/>
            </div>

            <div className={styles.username}>
            <input type="text" name="" id="" autoComplete="off" onChange={(e)=> {setData({...data, email: e.target.value})}} value={data.email} className={styles.username2} placeholder='Email Address'/>
            <Image width={20} height={20} alt='' src='/username.svg'/>
            </div>

            <div className={styles.username}>
            <input type={showPassword?'text':'password'} autoComplete="off" name="" id="" onChange={(e)=> {setData({...data, password: e.target.value})}} value={data.password} className={styles.username2} placeholder='Password'/>
            <Image width={20}  onClick={password} height={20} alt='' src='/password.svg'/>
            </div>

            <div className={styles.username}>
            <input value={data.confirmPassword} autoComplete="off" type={showPassword2?'text':'password'} name="" id="" onChange={(e)=> {setData({...data, confirmPassword: e.target.value})}} className={styles.username2} placeholder='Confirm Password'/>
            <Image onClick={()=>setShowPassword2(!showPassword2)} width={20} height={20} alt='' src='/password.svg'/>
            </div>


            <button className={styles.button}>Sign Up</button>
            </form>
            <p className={styles.paragraph}>OR</p>
            <p className={styles.desc}>Login with</p>
            <div className={styles.social}>
            <Link href='/https://www.linkedin.com'> <Image src='/FACEBOOK.png' width={25} height={25} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/LINKEDIN.png' width={25} height={25} className={styles.facebook} alt='Image Loading Error'/> </Link>
          <Link href='/https://www.facebook.com/'> <Image src='/twitterb.svg' width={25} height={25} className={styles.twitter} alt='Image Loading Error'/> </Link>
            </div>

        </div>
    </div>
  )
}

export default Register
