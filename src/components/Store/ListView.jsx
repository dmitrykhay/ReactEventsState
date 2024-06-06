import { ShopItem } from "./ShopItem";

export const ListView = ({ cards }) => {
  
  return (
    <div className="conteiner">
      {cards.map((card, index) => {
        return <ShopItem
          key={index}
          name={card.name}
          color={card.color}
          src={card.img}
          price={card.price}
        />
      })}
    </div>
  )
}
