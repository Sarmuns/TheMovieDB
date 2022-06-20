import axios from 'axios';

const getMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=4714ec2e3508f5889290a706c92e953c&language=en-US&page=1&include_adult=false&query=',
});

export default getMovie;
