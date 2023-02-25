

export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const MOVIES_ERROR = "MOVIES_ERROR";
export const MOVIES_LOADING = "MOVIES_LOADING";
export const MOVIE_SET_ID = "MOVIE_SET_ID";
export const SET_MOVIES_SIMILAR = "SET_MOVIES_SIMILAR";

export interface Movie {
    adult?: boolean,
    genre_ids: Array<number[]>,
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title?: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    vote_average: number,
    vote_count: number,  
    first_air_date?:string,
    origin_country?:Array<string[]>,
    name?: string,
    original_name?:string,
    type:string
}
export interface Movies {
    moviesPopular: Movie[],
    seriesPopular:Movie[],
    moviesTop: Movie[],
    moviesUpcoming: Movie[],
    
}
export interface SetAction {
    type: typeof MOVIES_SUCCESS,
    movies: Movies
}
export interface SetFetcing {
    type: typeof MOVIES_LOADING,
    loading: boolean
}
export interface SetError {
    type: typeof MOVIES_ERROR,
    error: string,
}
export interface SetMovieId {
    type: typeof MOVIE_SET_ID,
    movie: Movie,
}
export interface SetSimilarAction {
    type: typeof SET_MOVIES_SIMILAR,
    data: Movie[]
}


export type MoviesDispatchTypes = SetAction | SetFetcing | SetError | SetMovieId | SetSimilarAction