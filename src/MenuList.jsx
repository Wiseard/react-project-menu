import { useState } from 'react'
import { menu } from './data'
import { ButtonsList } from './ButtonsList'
import { Menu } from './Menu'

export const MenuList = () => {
  const [menuList, setMenuList] = useState(menu)
  const filterMenu = (category) => {
    const filtered = menu.filter((item) => {
      if (category === 'all') return item
      return item.category === category
    })
    setMenuList(filtered)
  }
  return (
    <>
      <ButtonsList filterMenu={filterMenu} />
      <section className="menu-list-container">
        {menuList.map((item) => {
          return <Menu {...item} key={item.id} />
        })}
      </section>
    </>
  )
}
