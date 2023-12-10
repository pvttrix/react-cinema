import { FC } from 'react'
import { IWatchedMovie } from '../types/movies'
import WatchedFilm from './WatchedFilm'

const WatchedList: FC<{
  watched: IWatchedMovie[]
  onDeleteWatched: (movieID: string) => void
}> = ({ watched, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedFilm
          key={movie.imdbID}
          watched={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  )
}

export default WatchedList
