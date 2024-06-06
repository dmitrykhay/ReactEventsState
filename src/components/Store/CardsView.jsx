import {ShopCard} from "./ShopCard";

export const CardsView = ({ cards }) => {
  
  return (
    <div className="conteiner">
      {cards.map((card, index) => {
        return <ShopCard
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