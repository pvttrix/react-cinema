import { useEffect, useState } from 'react'
import { IMovie } from '../types/movies'

export function useFetchFilms(query: string) {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const controller = new AbortController()
    async function fetchMovies() {
      try {
        setError('')
        setIsLoading(true)
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=ba7bdf12&s=${query}`,
          { signal: controller.signal }
        )
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const data = await res.json()
        console.log(data.Search)
        if (!data.Search) {
          throw new Error('No Movies found')
        }
        setMovies([...data.Search])
        setIsLoading(false)
      } catch (e) {
        if (e instanceof Error && e.name !== 'AbortError') {
          setError(e.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    if (query.length < 4) {
      setMovies([])
      setError('')
      return
    }
    fetchMovies()

    return function () {
      controller.abort()
    }
  }, [query])
  return { movies, isLoading, error }
}
