export interface IMovie {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

export interface IWatchedMovie {
  imdbID: string
  title: string
  year: number
  poster: string
  runtime: number
  imdbRating: number
  userRating: number
}

export interface ISummery {
  watched: Array<IMovie>
  avgImdbRating: number
  avgUserRating: number
  avgRuntime: number
}

export interface IMovieDetails {
  Title: string
  Year: number
  Poster: string
  Runtime: string
  imdbRating: number
  Plot: string
  Released: string
  Actors: string
  Director: string
  Genre: string
}
