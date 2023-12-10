import { FC, useState } from 'react'
import Star from './Star'

interface StarListProps {
  onRate?: (rating: number) => void
  color?: string
  size?: number
}

const StarRating: FC<StarListProps> = ({
  color = 'yellow',
  onRate,
  size = 44,
}) => {
  const [rating, setRating] = useState<number>(0)
  const [tempRating, setTempRating] = useState<number>(0)
  const handleRating = (i: number) => {
    setRating(i)
    onRate && onRate(i)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Star
          key={i}
          isFull={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onRating={() => handleRating(i + 1)}
          onEnterRating={() => setTempRating(i + 1)}
          onLeaveRating={() => setTempRating(0)}
          color={color}
          size={size}
        />
      ))}
      <p>{tempRating || rating}</p>
    </div>
  )
}

export default StarRating
