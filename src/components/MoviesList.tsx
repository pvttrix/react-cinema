import { FC } from 'react'
import { IMovie } from '../types/movies'
import MovieItem from './MovieItem'

const MoviesList: FC<{
  movies: IMovie[]
  onSelectedId: (id: string) => void
}> = ({ movies, onSelectedId }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          onSelectedId={onSelectedId}
        />
      ))}
    </ul>
  )
}

export default MoviesList
