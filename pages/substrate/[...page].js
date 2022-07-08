import React from 'react'
import {useState, useEffect,useContext} from 'react'
import AppContext from '../../Component/AppContext'
import styles from '../../styles/article.module.css'
import {useRouter} from 'next/router'


function subpage() {
  const [article, setArticle] = useState()
  const value =useContext(AppContext)
  const router = useRouter()
  const {page} = router.query
  const [id, setId] = useState()

  
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