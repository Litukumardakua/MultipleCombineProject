import React from "react";
import MenuItems from "./Menu_Items";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItems item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
