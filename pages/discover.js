import React from 'react'
import Link from 'next/Link';
import styles from '../styles/Home.module.css'

function discover() {
    return (
        <div className={styles.homepage}>
        <header  className={styles.nav}>
            <Link href='/'><img  className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/></Link>

      </header>
        </div>
    )
}

export default discover
