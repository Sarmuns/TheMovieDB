import axios from 'axios';

const getGenre = axios.create({
  baseURL: 'https://api.themoviedb.org/3/genre/movie/list?api_key=4714ec2e3508f5889290a706c92e953c&language=en-US',
});

export default getGenre;
