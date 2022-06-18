{/*const express = require("express")
const cors = require("cors")
const { Client } = require('@notionhq/client');
const dotenv = require("dotenv")
const axios = require("axios")

dotenv.config()

const app = express()
app.use(cors({
    origin: "*"
}))

const instance = axios.create({
    baseURL: `https://api.notion.com/v1`,
    headers: {"Authorization":"secret_Is4dOLDuemVvfqwHK4bkLIPMmeVBp9nBrY1i3jkYRGQ",
                "Notion-Version":"2022-02-22",
                "Accept":"/",
                "Access-Control-Allow-Origin": "*"
    }
})

const notion = new Client({ auth: process.env.NOTION_API_KEY });

*/}

const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const { Client } = require('@notionhq/client');





const app = express()
app.use(cors({
    origin: "*"
}))
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin','*')
    next();
})

const notion = new Client({ auth: process.env.NOTION_API_KEY });


app.get('/sub-in-rust/',(req,res)=>{
    (async () => {
        const blockId = 'ec908904cc174918acdc6c502c0461a6';
        const response = await notion.blocks.children.list({
          block_id: blockId,
          page_size: 100,
        });
        res.send(response.results)
      })();
    
})

app.get('/sub-in-rust/:id',(req,res)=>{
    (async () => {
        const blockId = req.params.id;
        const response = await notion.blocks.children.list({
          block_id: blockId,
          
        });
        res.send(response.results)
      })();
    
})



app.listen(8000)




{/*instance.get("/blocks/ec908904cc174918acdc6c502c0461a6/children")
            .then(response => {
                console.log(response.data.results[0]?.child_page.title)
            }).catch(error => console.log(error))
        */}
{/*app.get('/', (req, res)=> {
    (async () => {
        const blockId = 'ec908904cc174918acdc6c502c0461a6';
        const response = await notion.blocks.children.list({
          block_id: blockId,
          page_size: 50,
        });
        console.log(response);
      })();
})*/}

{/*app.listen(3000,()=>{
    console.log("listening bitch")
})*/}