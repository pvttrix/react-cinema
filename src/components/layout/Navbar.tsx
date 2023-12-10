import { FC } from 'react'
import { ReactChildren } from '../../types/children'
const Navbar: FC<ReactChildren> = ({ children }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      {children}
    </nav>
  )
}

export default Navbar
