import { buttons } from './data'
import { Button } from './Button'
import { useState } from 'react'

export const ButtonsList = ({ filterMenu }) => {
  const [categories, setCategories] = useState(buttons)
  return (
    <div className="buttons">
      {categories.map((item, index) => {
        return <Button item={item} key={index} filterMenu={filterMenu} />
      })}
    </div>
  )
}
