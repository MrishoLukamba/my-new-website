import React from 'react'
import {useState, useEffect,useContext} from 'react'
import AppContext from '../../Component/AppContext'
import styles from '../../styles/article.module.css'
import instance from '../../Component/Axios'


function subpage() {
  const value =useContext(AppContext)
  
  useEffect(() => {
    updatedfetch()
  },[])

  const updatedfetch =()=>{
    instance.get(`/sub-in-rust/page`)
    .then(response => {
        value.setPage(response.data)
    }).catch(error => {(<div>
        <h3>{error}</h3>
    </div>)})
  }
  

  console.log(value.state.article)
  return (
    <div className={styles.DivPage}>
     
     {
        value.state.article?.map(data =>{
          if(data.paragraph?.rich_text[0]?.annotations.italic)
          return (<span>{data.paragraph.rich_text[0]?.plain_text}</span>)

          if(data.paragraph?.rich_text[0]?.annotations.bold)
          return (<h3 >{data.paragraph?.rich_text[0].plain_text}</h3>)

          if(data.type == "paragraph")
          return (<p key={data.paragraph.rich_text[0]?.plain_text} >{data.paragraph.rich_text[0]?.plain_text}</p>)
          
          
          if(data.type == "divider")
          return (<div className={styles.divider}></div>)
          
          if(data.type == "image")
          return (<img className={styles.image} src={data.image.file.url}></img>)
        })
     }
    </div>
  )
}

export default subpage