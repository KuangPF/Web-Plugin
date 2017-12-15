import axios from 'axios';

export function getPluginItems() {
    return axios.request('../../data.json',{
       method:'get',
       params:''
    })
}