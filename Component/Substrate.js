import React from 'react'
import {useState, useEffect} from 'react'
import styles  from '../styles/substrate.module.css'
import axios from 'axios'



export default function Substrate() {

    const[post, setPost] = useState([]);
    const[title, setTitle] = useState();

    const instance = axios.create({
        baseURL: `localhost:8000`
    })
    
  
    instance.get("/mama")
            .then(response => {
                console.log(response)
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

