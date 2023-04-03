import { useEffect, useRef, useState } from 'react'

export const Button = ({ item, filterMenu }) => {
  const button = useRef(null)
  const [text, setText] = useState('')
  useEffect(() => {
    const content = button.current.dataset.id
    setText(content)
  }, [])
  return (
    <button
      onClick={() => filterMenu(text)}
      ref={button}
      className="btn"
      type="button"
      data-id={item}
    >
      {item}
    </button>
  )
}
