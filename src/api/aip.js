import axios from 'axios';

export function getPluginItems() {
    return axios.request('../../static/data/data.json',{
       method:'get',
       params:''
    })
}