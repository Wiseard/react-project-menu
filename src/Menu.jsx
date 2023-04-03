export const Menu = ({ title, price, img, desc }) => {
  return (
    <article className="menu-container">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="menu-desc">
        <div className="menu-title">
          <h3 className="title">{title}</h3>
          <p className="price">${price}</p>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </article>
  )
}
