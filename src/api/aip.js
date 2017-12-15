import axios from 'axios';
const path = require('path')

var pluginItemsRequestUrl =path.join(__dirname,'./static/data/data.json')
export function getPluginItems() {
    return axios.request(pluginItemsRequestUrl,{
       method:'get',
       params:''
    })
}