import React, { useState } from "react";
import { ChromePicker } from "react-color";

const Colorpackge = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "close color picker" : "pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updateColor) => setColor(updateColor.hex)}
        />
      )}
      <h2>You picked {color}</h2>
    </div>
  );
};

export default Colorpackge;
