import React from 'react'
import {useState, useEffect, useContext} from 'react'
import styles  from '../styles/substrate.module.css'
import instance from '../Component/Axios'
import AppContext from '../Component/AppContext'
import Link from'next/link'


export default function Substrate() {
    const value = useContext(AppContext)
    const[title, setTitle] = useState([]);

   
  
    useEffect(() => {
        fetched()
    },[])

    const fetched =()=>{
        instance.get("/sub-in-rust/")
            .then(response => {
                setTitle(response.data)
            }).catch(error => console.log(error))
    }

    //fetching articles 
    const getPage =(id)=>{
        instance.get(`/sub-in-rust/page/${id}`)
        .then(response => {
            value.setPage(response.data)
        }).catch(error => console.log(error))

    }
   
    //formating data return from notion Api
    const format = (string) =>{
        return string.split("T")[0]
    }
    const urlBeauty = (string) =>{
        return string.replaceAll(" ","-")
    }

   


  return (
     <div className={styles.upperNav}>
         <h2>SUBSTRATE & RUNTIMES</h2>
         <div className={styles.buttons}>
             <button onClick={fetched}  className={styles.button}>SUB-IN-RUST</button>
             <button className={styles.button}>ARTICLES</button>
         </div>

    
         <div className={styles.titles}>
        
            {title.map(name =>(
                <div key={name.id}>
                    <span>{format(name.created_time)}</span>
                    <span>Last edited: {format(name.last_edited_time)}</span>
                    <Link href={`/substrate/${urlBeauty(name.child_page.title)}`}>
                      <h3 onClick={getPage(name.id)}>{name.child_page.title}</h3>
                    </Link>
               </div>
            ))}
            
             
             
         </div>
             
     </div>

  )

  }

