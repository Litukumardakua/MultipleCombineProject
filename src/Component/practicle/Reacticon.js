import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillAmazonCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Reacticon = () => {
  return (
    <div>
      <IconContext.Provider value={{ color:"pink", Size:"5rem"}}>
        <FaReact style={{ color: "blue", fontSize: "5rem" }} />
        {/* <AiFillAmazonCircle style={{ color: "pink", fontSize: "5rem" }} /> */}
        <FaReact/>
        <AiFillAmazonCircle/>
      </IconContext.Provider>
    </div>
  );
};

export default Reacticon;
