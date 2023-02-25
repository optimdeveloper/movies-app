import axios from "axios";

const axios_api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE,
});
export { axios_api };

export const api_popular=`movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
export const api_upcoming = `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
export const api_toprated =`movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
export const api_series =`tv/popular?api_key=${process.env.REACT_APP_API_KEY}`


