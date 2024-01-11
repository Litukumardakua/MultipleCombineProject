import React from "react";
import "./style.css";
import MenuList from "./Menu_list";

const Recurcive = ({menus = []}) => {
  return (
    <>
      <div className="tree-view-container">
        <MenuList list={menus}/>
      </div>
    </>
  );
};

export default Recurcive;
