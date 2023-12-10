import { FC } from 'react'
import { ReactChildren } from '../../types/children'

const Main: FC<ReactChildren> = ({ children }) => {
  return <div className="main">{children}</div>
}

export default Main
