import "./ShopCard.css";

export const ShopCard = ({ name, color, src, price }) => {
  
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <span className="card-color">{color}</span>
      <img className="card-img" src={src} alt="Картинка товара" />
      <div className="card-price-wrap">
        <span className="card-price">{price}</span>
        <button className="card-add-button" type="button">Add to cart</button>
      </div>
    </div>
  )
}
