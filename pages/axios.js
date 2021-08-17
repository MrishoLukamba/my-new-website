import axios from 'axios'

const key = 'k9yd7nh8uanli0elxaemt';

const instance = axios.createInstance({baseUrl:`https://api.lunarcrush.com/v2?data=assets&key=${key}&symbol=`})

export default instance;
//k9yd7nh8uanli0elxaemt

//data=assets&key=k9yd7nh8uanli0elxaemt&symbol=

//data=assets&key=k9yd7nh8uanli0elxaemt&symbol=