
import { createBrowserHistory } from "history";
import { Movie } from "../Redux/types";

export const history = createBrowserHistory();

export const handleMovies = (movies: Movie[]) => {
    let moviesFormat: Movie[] = []
    for (let i = 0; i < movies.length; i++) {
        moviesFormat.push({
            ...movies[i],
            poster_path:
                movies[i].backdrop_path ? process.env.REACT_APP_API_IMAGE + "w500" +
                    movies[i].backdrop_path : movies[i].poster_path ? process.env.REACT_APP_API_IMAGE + "w500" +
                        movies[i].poster_path : 'https://th.bing.com/th/id/OIP.9CVqGqBVVbR7uHx-RcmPgAHaEN?pid=ImgDet&rs=1',
            backdrop_path:
                process.env.REACT_APP_API_IMAGE + "original" +
                movies[i].backdrop_path
            ,
        });
    }
    return moviesFormat
}