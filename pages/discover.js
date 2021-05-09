import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function discover() {
    const router = useRouter();
    return (
        <div className={styles.homepage}>
        <header  className={styles.nav}>
            <img onClick={()=> router.push("/")} className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/>

      </header>
        </div>
    )
}

export default discover
