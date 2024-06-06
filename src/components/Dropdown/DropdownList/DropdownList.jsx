import { DropdownItem } from "./DropdownItem";
import { useState } from "react";

export const DropdownList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const listItem = ["Информация о профиле", "Изменить пароль", "Стать PRO", "Помощь", "Выйти"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ul data-id="dropdown" className="dropdown">
      {listItem.map((item, index) => (
        <DropdownItem
          key={index}
          item={item}
          onItemClick={handleItemClick}
          selectedItem={selectedItem}
        />
      ))}
    </ul>
  );
};
