import React from 'react'
import {useState, useEffect} from 'react'
import styles  from '../styles/substrate.module.css'
import axios from "axios"



export default function Substrate() {

    const[post, setPost] = useState([]);
    const[title, setTitle] = useState();

    const instance = axios.create({
        baseURL: `https://api.notion.com/v1`,
        headers: {"Authorization":"secret_Is4dOLDuemVvfqwHK4bkLIPMmeVBp9nBrY1i3jkYRGQ",
                    "Notion-Version":"2022-02-22",
                    "Accept":"/",
                    "Access-Control-Allow-Origin": "*"
        }
    })
    
    {/*instance.get("/pages/ec908904cc174918acdc6c502c0461a6")
            .then(response => {
                console.log(response.data.properties.title.title)
            }).catch(error => console.log(error))
        */}
    instance.get("/blocks/ec908904cc174918acdc6c502c0461a6/children")
            .then(response => {
                console.log(response.data.results[0]?.child_page.title)
            }).catch(error => console.log(error))

   
    
//console.log(title)
  return (
     <div className={styles.upperNav}>
         <h2>SUBSTRATE</h2>
         <div className={styles.buttons}>
             <button  className={styles.button}></button>
             <button className={styles.button}></button>
         </div>

         <div className={styles.titles}>
             <div>
                <span></span>
                <h3 ></h3>
             </div>
             

         </div>
             
     </div>

  )

  }

