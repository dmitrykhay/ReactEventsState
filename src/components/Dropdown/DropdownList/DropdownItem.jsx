export const DropdownItem = ({ item, onItemClick, selectedItem }) => {
  const isSelected = item === selectedItem;

  return (
    <li
      className={`${isSelected ? 'active' : ''}`}
      onClick={() => onItemClick(item)}
    >
      <a href="#">{item}</a>
    </li>
  );
};
