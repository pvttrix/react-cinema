import { useEffect, useState } from 'react'
import MovieDetails from './components/MovieDetails'
import MoviesList from './components/MoviesList'
import Summery from './components/Summery'
import WatchedList from './components/WatchedList'
import Main from './components/layout/Main'
import Navbar from './components/layout/Navbar'
import NavbarResults from './components/layout/NavbarResults'
import Search from './components/Search'
import Box from './components/ui/Box'
import ErrorMessage from './components/ui/Error'
import Loader from './components/ui/Loader'
import { useFetchFilms } from './hooks/fetchFilms'
import { UseLocalStorage } from './hooks/useLocalstorage'
import { IWatchedMovie } from './types/movies'

export default function App() {
  const [query, setQuery] = useState<string>('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [watched, setWatched] = UseLocalStorage([], 'watchedMovies')
  const handleSelectedId = (id: string) => {
    console.log(id)
    setSelectedId((selectedId) => (selectedId === id ? null : id))
  }
  const handleCloseMovie = () => {
    setSelectedId('')
  }
  const handleDeleteWatchedFilm = (filmId: string) => {
    setWatched((watchedFilms) =>
      watchedFilms.filter((f) => f.imdbID !== filmId)
    )
  }
  const handleAddToWatched = (watchedFilm: IWatchedMovie) => {
    setWatched((prev) => [...prev, watchedFilm])
  }
  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify([...watched]))
    },
    [watched]
  )

  const { movies, isLoading, error } = useFetchFilms(query)
  return (
    <>
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
        />
        <NavbarResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <>
            {error && <ErrorMessage message={error} />}
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <MoviesList
                movies={movies}
                onSelectedId={handleSelectedId}
              />
            )}
          </>
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              movieId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddToWatched={handleAddToWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summery watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatchedFilm}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
