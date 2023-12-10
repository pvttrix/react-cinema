import { FC } from 'react'

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <p className="error">
      <span>{message}</span>
    </p>
  )
}

export default ErrorMessage
