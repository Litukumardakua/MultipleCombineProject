import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ReactToolTip = () => {
  return (
    <div>
      {/* <Tippy content={<span>Tooltip</span>}>
        <button>My button</button>
      </Tippy> */}
      <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
    </div>
  );
};

export default ReactToolTip;
