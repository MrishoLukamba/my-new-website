import React from 'react'
import {useState, useEffect} from 'react'
import { Client } from '@notionhq/client'
import styles  from '../styles/substrate.module.css'



export async function loadpage(){
    const pageId = "bb93512719964604ad8165c4fd1e8ab8";
    const response = await notion.blocks.children.list({
        block_id: pageId,
        
    });
    return response.results;
}

function Substrate() {

    const[post, setPost] = useState([]);
    const[title, setTitle] = useState([]);

    useEffect(() =>{
        retrievPages().then((data) => {
            setPost(data)
        }).catch(error =>{
            console.log(error)
        })

        
    },[])
    const notion = new Client({
        auth: "secret_Is4dOLDuemVvfqwHK4bkLIPMmeVBp9nBrY1i3jkYRGQ"
    });
    
   const retrievPages = async()=>{
        const pageId = '68fc25f81d9a437081f5ec47f481f9b8';
        const response = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100,
          });
        return response.results;
    
    } 

    const subTitles = async () =>{
        const pageId = "ec908904cc174918acdc6c502c0461a6";
        const response = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100,
        });
        setTitle(response.results)
    }
    const handeClick = () =>{
        subTitles()
    }
    const pageClick = () => {
        subpage()
    }
    
    

    
console.log(title?.[1]?.created_time)
  return (
     <div className={styles.upperNav}>
         <h2>SUBSTRATE</h2>
         <div className={styles.buttons}>
             <button onClick={handeClick} className={styles.button}>{post?.[1]?.child_page.title}</button>
             <button className={styles.button}>{post?.[2]?.child_page.title}</button>
         </div>

         <div className={styles.titles}>
             <div>
                <span>{title?.[1]?.created_time}</span>
                <h3 onClick={pageClick}>{title?.[1]?.child_page.title}</h3>
             </div>
             

         </div>
             
     </div>

  )
}

export default Substrate;
