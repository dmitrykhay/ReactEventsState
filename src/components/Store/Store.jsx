import "./Store.css";
import { IconSwitch } from "./IconSwitch";
import { useState } from "react";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

export const Store = (props) => {
  const [icon, setIcon] = useState("view_module");
  const products = props.data;

  const handleClick = () => {
    if (icon === "view_module") {
      setIcon("view_list");
    } else {
      setIcon("view_module");
    }    
  };

  return (
    <>
    <IconSwitch
      icon={icon}
      onSwitch={handleClick} />
    {icon === "view_module" ? (
      <CardsView cards={products} />
    ) : (
      <ListView cards={products} />
    )}
    </>
  )
}
