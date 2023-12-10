import { FC, useState } from 'react'
import { ReactChildren } from '../../types/children'
const Box: FC<ReactChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  )
}

export default Box
