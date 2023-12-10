import { FC, useEffect, useRef } from 'react'
interface SearchProps {
  query: string
  setQuery: (query: string) => void
}
const Search: FC<SearchProps> = ({ query, setQuery }) => {
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }, [])

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchRef}
    />
  )
}

export default Search
