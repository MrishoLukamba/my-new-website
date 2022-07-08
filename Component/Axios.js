import axios from "axios";

const instance = axios.create({
    baseURL: `https://lukamba-notion.herokuapp.com/`
})


export default instance;
