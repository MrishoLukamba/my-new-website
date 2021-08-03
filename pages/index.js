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
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },1000)
   
    
  }, [])

  const handleChange =()=>{
    on?setOn(false) : setOn(true);
  }
  const handleScroll =()=>{
    scroll ? setScroll(false) : setScroll(true);
  }

  console.log(scroll)
  const linkedin = "https://www.linkedin.com/in/mrisho-lukamba-20ba841b6/"
  const ig= "https://www.instagram.com/mrisholukamba/"
  const github = "https://github.com/MrishoLukamba/"
  const twitter = "https://twitter.com/LukambaMrisho"
  
  
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
              <Image  objectFit='cover'  layout='intrinsic' objectPosition='50% 23%' width={700} height={360} src='/lukawhiteright.jpg' alt='lukamba'/>
            </picture>
            <main style={{backgroundColor:on===false?'white':'black'}} className={styles.main}>
              
              <section className={styles.brief}>
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
              </section>

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/blockchain.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                  <p>Smart Contracts and Blockchain Technologies.
                    Diving into Future. 

                  </p>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/techguy.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                  <p>Programming languages tutor, Data structures and Algorithm 
                    in Python and Javascript.

                  </p>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

            </main>
            <footer  className={styles.footer}>
            
           <section className={styles.footerContent1}>
                <div className={styles.icons}>
                        <a target="_blank" href={linkedin}><IconButton><LinkedInIcon style={{color:"white", fontSize:20}}/></IconButton></a>
                        <a target="_blank" href={twitter}><IconButton><TwitterIcon style={{color:"white", fontSize:20}}/></IconButton></a>
                        <a target="_blank" href={github}><IconButton><GitHubIcon style={{color:"white", fontSize:20}}/></IconButton></a>
                        
                        <a target="_blank" href={ig}><IconButton><InstagramIcon style={{color:"white", fontSize:20}}/></IconButton></a>
                        
                  </div>

                  <div className={styles.partner}>
                
                    <span>Visit Tanzania</span>
                    <a href="https://www.marblestours.co.tz/" target="_blank">MARBLESTOURS AND SAFARI</a>
                
                  </div>
           </section>
           
              
                <div className={styles.emailDiv}>
                  <form>
                    <input className={styles.inputEmail} placeholder='site in development..'></input>
                    <button className={styles.emailBtn} type='submit'>Be Updated!</button>
                  </form>
                </div>
                

              

            

            <div className={styles.footerfoot}>
               
                <span>© 2021 Mrisho Lukamba</span>
            </div>
          </footer>
          </div>
          )
          }
              
      
      
      
    </div>
  )
}
