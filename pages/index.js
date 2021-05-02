import Head from 'next/head'
import Image from 'next/image'
import Brief from '../Component/Brief'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Mrisho Lukamba</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.nav}>
        <img  className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/>
        <button className={styles.button}>Discover</button>
      </div>
      <picture className={styles.picture}>
        <Image  objectFit='cover'  layout='intrinsic' objectPosition='100% 15%' width={1000} height={500} src='/lukawhiteright.jpg' alt='lukamba'/>
      </picture>
      <main className={styles.main}>
        <Brief/>
        <Brief/>
        <Brief/>
      </main>
      <footer className={styles.footer}>
        <div className={styles.iconsDiv}>
          <span> connect with me</span>
          <div className={styles.icons}>
            <IconButton><LinkedInIcon style={{color:"white"}}/></IconButton>
            <IconButton><TwitterIcon style={{color:"white"}}/></IconButton>
            <IconButton><FacebookIcon style={{color:"white"}}/></IconButton>
            <IconButton><InstagramIcon style={{color:"white"}}/></IconButton>
            <IconButton><CodeIcon style={{color:"white"}}/></IconButton>
          </div>
        </div>
      </footer>
    </div>
  )
}
