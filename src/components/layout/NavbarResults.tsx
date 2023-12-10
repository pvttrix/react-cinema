import { FC } from 'react'
import { IMovie } from '../../types/movies'

const NavbarResults: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  )
}

export default NavbarResults
