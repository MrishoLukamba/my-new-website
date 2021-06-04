import Head from 'next/head'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import GitHubIcon from '@material-ui/icons/GitHub';
import Switch from '@material-ui/core/Switch';
import ClipLoader from "react-spinners/ClipLoader";


export default function Home() {
  const router = useRouter()
  const [on, setOn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },1000)
   
    
  }, [])

  const handleChange =()=>{
    on?setOn(false) : setOn(true);
  }

  console.log(on)
  const linkedin = "https://www.linkedin.com/in/mrisho-lukamba-20ba841b6/"
  const ig= "https://www.instagram.com/mrisholukamba/"
  const github = "https://github.com/MrishoLukamba/"
  const twitter = "https://twitter.com/LukambaMrisho"
  const fb="https://www.facebook.com/abdulrazaq.lukamba/"
  const dev = "https://dev.to/mrisholukamba"
  return (

         <div className={styles.homepage}>
          <Head>
            <title>Mrisho Lukamba</title>
            <meta name='keyword' content='blockchain, web developer, investor, portfolio'></meta>
        
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
            
          </Head>
          {
            loading?
            (
              <div className={styles.loader}>
              <ClipLoader
              size={50} 
              color={'#fff'} 
              loading={loading}
               
            />
            </div> 
              )

            :
            
            (<div>
            <header style={{backgroundColor:on===false?'white':'rgba(0, 0, 0, 0.904)'}} className={styles.nav}>
              <img  className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/>

              <Switch
              onClick={handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <button onClick={()=> router.push("/discover")} style={{color:on===false? 'rgb(1, 1, 26)':'white'}} className={styles.button}>Discover</button>
            </header>
            <picture className={styles.picture}>
              <Image  objectFit='cover'  layout='intrinsic' objectPosition='100% 15%' width={1000} height={500} src='/lukawhiteright.jpg' alt='lukamba'/>
            </picture>
            <main style={{backgroundColor:on===false?'white':'black'}} className={styles.main}>
              
              <div className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/webIcon.png' alt=''></img> 
                  </div>
                  
                  <div className={styles.icondetails}>
                  <p>Building modern and responsive Web Application
                    ranging from Portfolios, Directory and Contact pages,
                    Online stores to E-commerce websites

                  </p>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </div>

              <div className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/blockchain.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                  <p>Crypto trader and investor. Blockchain technology enthusiast,
                    enhancing existing technology.

                  </p>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </div>

              <div className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/techguy.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                  <p>Programming languages tutor, Data structures and Algorithm 
                    in Python and Javascript.

                  </p>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </div>

            </main>
            <footer className={styles.footer}>
              <div className={styles.iconsDiv}>
                <span> connect with me</span>
                <div className={styles.icons}>
                  <a target="_blank" href={linkedin}><IconButton><LinkedInIcon style={{color:"white"}}/></IconButton></a>
                  <a target="_blank" href={twitter}><IconButton><TwitterIcon style={{color:"white"}}/></IconButton></a>
                  <a target="_blank" href={github}><IconButton><GitHubIcon style={{color:"white"}}/></IconButton></a>
                  <a target="_blank" href={fb}><IconButton><FacebookIcon style={{color:"white"}}/></IconButton></a>
                  <a target="_blank" href={ig}><IconButton><InstagramIcon style={{color:"white"}}/></IconButton></a>
                  <a target="_blank" href={dev}><IconButton><CodeIcon style={{color:"white"}}/></IconButton></a>
                </div>

                <div className={styles.partner}>
                <span>In partnership with</span>
                <h3> </h3>
                <img src='/marbles.jpg' alt='marblestours and safari'/>
                <a href="https://www.marblestours.co.tz/" target="_blank">MARBLESTOURS AND SAFARI</a>
                <h4>All rights reserved</h4>
                <h4>Copyright © 2021 Mrisho Lukamba</h4>
              </div>

              </div>


          </footer>
          </div>
          )
          }
              
      
      
      
    </div>
  )
}
