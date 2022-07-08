import Head from 'next/head'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Home() {
  const router = useRouter()
  
  

  
  const linkedin = "https://www.linkedin.com/in/mrisho-lukamba-20ba841b6/"
  const github = "https://github.com/MrishoLukamba/"
  const twitter = "https://twitter.com/LukambaMrisho"
  
 

 

 

  
  return (

         <div className={styles.homepage}>
          <Head>
            <title>Mrisho Lukamba</title>
            
            <meta name="description" content="Blockchain runtime on substrate"></meta>
            <meta name="description" content="Terence Tao analysis"></meta>
            <meta name="description" content="Substrate tutorials"></meta>
            <meta name='keywords' content='Blockchain,Polkadot,Runtime,Cosmos,Smart Contracts,Ethereum,Substrate,Rust, Mathematics'></meta>
        
            <meta name="author" content="Mrisho Lukamba"></meta>

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
            
          </Head>
          
            
            
            <div>
            <header  className={styles.nav}>
              <img  className={styles.img} src='/myLogo.png' alt='LUKAQUANTUM'/>

             
              <button onClick={()=> router.push("/discover")}  className={styles.button}>Discover</button>
            </header>

            

            <div className={styles.Name}>
              <h1>Mrisho Lukamba</h1>
              <div className={styles.icons}>
                        <a target="_blank" href={linkedin}><IconButton><LinkedInIcon style={{color:"#333333", fontSize:20}}/></IconButton></a>
                        <a target="_blank" href={twitter}><IconButton><TwitterIcon style={{color:"#333333", fontSize:20}}/></IconButton></a>
                        <a target="_blank" href={github}><IconButton><GitHubIcon style={{color:"#333333", fontSize:20}}/></IconButton></a>
                                                
              </div>

             
            </div>


            <main className={styles.main}>
              
            <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/blockchain.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                
                        <h4>SUBSTRATE</h4>
                        <p>
                          Explaining and exploring FRAME runtime through articles and lab notes.
                          And blockchain runtimes
                        </p>
                  
                  <button onClick={()=> router.push("/substrate")} className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/math.png' alt=''></img> 
                  </div>
          
                  <div className={styles.icondetails}>
                         <h4>MATHEMATICS</h4>
                        <p>Exploring mathematical proofs from number theory 
                          and other maths fields

                        </p>
                    
                  <button className={styles.buttonIcon}>Lets prove it</button>
                  </div>
              </section>

              

              <section className={styles.brief}>
                  <div className={styles.mainIconDiv}>
                    <img src='/techguy.png' alt=''></img> 
                  </div>

                  <div className={styles.icondetails}>
                        <h4>2.5 FOUNDATION</h4>
                        <p>
                          Collaborating with friends on various fields and writing our personal views.
                        </p>
                  
                  <button className={styles.buttonIcon}>Learn more</button>
                  </div>
              </section>

            </main>
            <footer  className={styles.footer}>
            
           <section className={styles.footerContent1}>
                

                  <div className={styles.partner}>
                
                    <span>Visit Tanzania 🛫</span>
                    <a href="https://www.marblestours.co.tz/" target="_blank">MARBLESTOURS AND SAFARI</a>
                
                  </div>
           </section>
           
              
               
                

              

            

            <div className={styles.footerfoot}>
               
                <span>© 2022 Mrisho Haji Lukamba</span>
            </div>
          </footer>
          </div>
          
          
              
      
      
      
    </div>
  )
}
