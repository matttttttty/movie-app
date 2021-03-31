import React from "react";

const ListGroup = ({
  items,
  selectItem,
  valueProperty,
  nameProperty,
  onItemChange,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item[nameProperty] === selectItem
              ? "list-group-item active"
              : "list-group-item"
          }
          aria-current="true"
          onClick={() => onItemChange(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "_id",
  nameProperty: "name",
};

export default ListGroup;
