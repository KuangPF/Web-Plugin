import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production';
const url = debug ? '/api/index' : 'https://kuangpf.github.io/Web-Plugin/dist/static/data/data.json';
export function getPluginItems() {
  return axios.request(url, {
    method: 'get',
    params: ''
  });
}
