/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=4714ec2e3508f5889290a706c92e953c&language=en-US&page=1',
});

export default api;
