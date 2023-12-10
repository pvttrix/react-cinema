import { FC } from 'react'
import { IMovie } from '../types/movies'

const MovieItem: FC<{
  movie: IMovie
  onSelectedId: (id: string) => void
}> = ({ movie, onSelectedId }) => {
  return (
    <>
      {' '}
      <li
        key={movie.imdbID}
        onClick={() => onSelectedId(movie.imdbID)}
      >
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </>
  )
}

export default MovieItem
