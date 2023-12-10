import { FC } from 'react'
import { IWatchedMovie } from '../types/movies'
interface WatchedMovieProps {
  watched: IWatchedMovie
  onDeleteWatched: (movieID: string) => void
}
const WatchedFilm: FC<WatchedMovieProps> = ({ watched, onDeleteWatched }) => {
  return (
    <li key={watched.imdbID}>
      <img
        src={watched.poster}
        alt={`${watched.title} poster`}
      />
      <h3>{watched.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watched.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watched.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watched.runtime} min</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteWatched(watched.imdbID)}
      >
        X
      </button>
    </li>
  )
}

export default WatchedFilm
