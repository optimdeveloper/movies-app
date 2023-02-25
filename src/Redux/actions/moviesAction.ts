
import { Movie, Movies, MOVIES_ERROR, MOVIES_LOADING, MOVIES_SUCCESS, MOVIE_SET_ID, SetAction, SetError, SetFetcing, SetMovieId, SetSimilarAction, SET_MOVIES_SIMILAR } from '../types';
import { AppThunk } from '../store';
import { handleMovies } from '../../Utils/constants';
import { axios_api, api_popular, api_series } from '../../Api/axios';


export const set = (movies: Movies): SetAction => {
    return { type: MOVIES_SUCCESS, movies }
}
export const setLoading = (loading: boolean): SetFetcing => {
    return { type: MOVIES_LOADING, loading }
}
export const setError = (error: string): SetError => {
    return { type: MOVIES_ERROR, error }
}
export const setIdMovie = (movie: Movie): SetMovieId => {
    return { type: MOVIE_SET_ID, movie }
}
export const setSimilarMovies = (data: Movie[]): SetSimilarAction => {
    return { type: SET_MOVIES_SIMILAR, data }
}
export const getMovies = () => {
    return async (dispatch: AppThunk) => {

        try {
            dispatch(setLoading(true))
            const popular_movies = await axios_api.get(api_popular, {});
            const popular_series = await axios_api.get(api_series, {});

            let moviesPopular = handleMovies(popular_movies.data.results)
            let seriesPopular = handleMovies(popular_series.data.results)


            dispatch(set({ moviesPopular, seriesPopular, moviesTop: [], moviesUpcoming: [] }))
        } catch (err: any) {
            let error = err.response.data
            console.log(err.response.data)
            dispatch(setError(error))

        }
    };
};


export const getSimilar = (id: number,type:string) => {
    return async (dispatch: AppThunk) => {

        try {
            dispatch(setLoading(true))
            let similar = await axios_api.get(`/${type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`, {});
            let data = handleMovies(similar.data.results)

            dispatch(setSimilarMovies(data))
        } catch (err: any) {
            let error = err.response.data
            console.log(err.response.data)
            dispatch(setError(error))
        }
    };
};


