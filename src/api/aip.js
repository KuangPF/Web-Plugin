import axios from 'axios';

export function getPluginItems() {
    // return axios.request('https://kuangpf.github.io/Web-Plugin/dist/static/data/data.json',{
    //    method:'get',
    //    params:''
    // })
    
    return axios.request('../../static/data/data.json',{
        method:'get',
        params:''
    })
}