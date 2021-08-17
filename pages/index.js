import Head from 'next/head'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import GitHubIcon from '@material-ui/icons/GitHub';
import Switch from '@material-ui/core/Switch';
import ClipLoader from "react-spinners/ClipLoader";
import Typist from 'react-typist';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import Crypto from '../Component/crypto';

export default function Home() {
  const router = useRouter()
  const [crypto, setCrypto] = useState([])
  const [on, setOn] = useState(false);
  

  const handleChange =()=>{
    on?setOn(false) : setOn(true);
  }
  

  
  const linkedin = "https://www.linkedin.com/in/mrisho-lukamba-20ba841b6/"
  const ig= "https://www.instagram.com/mrisholukamba/"
  const github = "https://github.com/MrishoLukamba/"
  const twitter = "https://twitter.com/LukambaMrisho"
  
  const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

 

 useEffect(() => {
  async function getCrypto(prop){
    axios.get(`https://api.lunarcrush.com/v2?data=assets&key=k9yd7nh8uanli0elxaemt&symbol=${prop}`).then((response) => {
    const details = response.data.data[0]
    const [symbol,price,mCap] = [details.symbol,details.price, details.market_cap]
    const result = {name:symbol,price:(price).toFixed(2), market_cap:formatCash(mCap)};
    setCrypto((prev)=>[...prev,result])
    });
  }
  getCrypto("BTC")
  getCrypto("DOT")
  getCrypto("ETH")
  getCrypto("ADA")

  }, []);

  console.log(crypto)
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
          
            
            
            <div>
            <header style={{backgroundColor:on===false?'white':'rgba(0, 0, 0, 0.904)'}} className={styles.nav}>
              <img  className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/>

              <Switch
              onClick={handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <button onClick={()=> router.push("/discover")} style={{color:on===false? 'rgb(1, 1, 26)':'white'}} className={styles.button}>Discover</button>
            </header>

            <Marquee  direction='right' children={null} gradientWidth={0} style={{display:"flex",position:'absolute',height:'40px', backgroundColor:on===false?'rgba(225,225,255,0.3)':'black',backdropFilter:blur(50),zIndex:2, paddingRight:10,paddingLeft:10}} >
              {crypto.map(({name,price,market_cap})=>(
                  <Crypto name={name} price={price} market_cap={market_cap}></Crypto>
              ))}
              
            </Marquee>

            <picture className={styles.picture}>
              <Image  objectFit='cover'  layout='intrinsic' objectPosition='30% 13%' width={700} height={360} src='/lukawhiteright.jpg' alt='lukamba' />
            </picture>
            <main style={{backgroundColor:on===false?'white':'black'}} className={styles.main}>
              
              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/webIcon.png' alt=''></img> 
                  </div>
                  
                  <div className={styles.icondetails}>
                    <Typist>
                        <p>Building modern and responsive Web Application
                          ranging from Portfolios, Directory and Contact pages,
                          Online stores to E-commerce websites

                        </p>
                    </Typist>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/blockchain.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                    <Typist>
                        <p>Smart Contracts and Blockchain Technologies.
                          Diving into Future. 

                        </p>
                  </Typist>
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/techguy.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                    <Typist>
                        <p>Programming languages tutor, Data structures and Algorithm 
                          in Python and Javascript.

                        </p>
                  </Typist>
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
          
              
      
      
      
    </div>
  )
}
