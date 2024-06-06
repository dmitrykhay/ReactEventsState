import "./ShopItem.css";

export const ShopItem = ({ name, color, src, price }) => {
  
  return (
    <div className="list-card">
      <img className="list-card-img" src={src} alt="Картинка товара" />
      <h2 className="list-card-title">{name}</h2>
      <span className="list-card-color">{color}</span>      
      <span className="list-card-price">${price}</span>
      <button className="list-card-add-button" type="button">Add to cart</button>
    </div>
  )
}
