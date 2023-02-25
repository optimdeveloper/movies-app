
import {
    MOVIES_SUCCESS,
    MOVIES_ERROR,
    MOVIES_LOADING,
    MoviesDispatchTypes,
    Movies,
    Movie,
    MOVIE_SET_ID,
    SET_MOVIES_SIMILAR
} from "../types";

interface InitialState {
    movies: Movies,
    error: string,
    loading: boolean,
    movieId: Movie,
    similar: Movie[]
}

const initialState: InitialState = {
    movies: {
        moviesPopular: [],
        moviesTop: [],
        moviesUpcoming: [],
        seriesPopular: [],
    },
    similar: [],
    movieId: {
        adult: false,
        genre_ids: [],
        backdrop_path: '',
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
        first_air_date: '',
        origin_country: [],
        original_name: '',
        name: '',
        type: ''
    },
    error: '',
    loading: false,
};

const MovieReducer = (state: InitialState = { ...initialState }, action: MoviesDispatchTypes): InitialState => {
    switch (action.type) {
        case MOVIES_LOADING:
            return {
                ...state,
                error: '',
                loading: action.loading,
            };
        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies,
                error: '',
                loading: false,
            };
        case MOVIES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case MOVIE_SET_ID:
            return {
                ...state,
                movieId: action.movie
            };
        case SET_MOVIES_SIMILAR:
            return {
                ...state,
                similar: action.data
            };
        default:
            return state;
    }
};
export default MovieReducer