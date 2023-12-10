import { FC, useEffect, useState } from 'react'
import { IMovieDetails, IWatchedMovie } from '../types/movies'
import Loader from './ui/Loader'
import StarRating from './ui/StarRating'

const MovieDetails: FC<{
  movieId: string
  watched: IWatchedMovie[]
  onCloseMovie: () => void
  onAddToWatched: (movie: IWatchedMovie) => void
}> = ({ movieId, onCloseMovie, onAddToWatched, watched }) => {
  const [movie, setMovie] = useState<IMovieDetails | null>(null)
  const [userRating, setUserRating] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isWatched = watched.map((movie) => movie.imdbID).includes(movieId)

  console.log(isWatched)
  const {
    Title: title = '',
    Year: year = 0,
    Poster: poster = '',
    Runtime: runtime = '',
    imdbRating = 0,
    Plot: plot = '',
    Released: released = '',
    Actors: actors = '',
    Director: director = '',
    Genre: genre = '',
  } = movie || {}

  const handleAddToWatch = () => {
    const watchedMovie: IWatchedMovie = {
      imdbID: movieId,
      poster: poster,
      imdbRating: Number(imdbRating),
      title: title,
      runtime: Number(runtime.split(' ')[0]),
      year: year,
      userRating: userRating,
    }
    onAddToWatched(watchedMovie)
    onCloseMovie()
  }
  useEffect(() => {
    async function fetchMovieDetails(id: string) {
      setIsLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=ba7bdf12&i=${id}`)
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      const data = await res.json()
      setMovie(data)
      setIsLoading(false)
      console.log(data)
    }

    fetchMovieDetails(movieId)
  }, [movieId])
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie} movie`}
            />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            {!isWatched && (
              <div className="rating">
                <StarRating
                  size={24}
                  onRate={setUserRating}
                />
                <button
                  className="btn-add"
                  onClick={handleAddToWatch}
                >
                  Add to Watched
                </button>
              </div>
            )}
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  )
}

export default MovieDetails
