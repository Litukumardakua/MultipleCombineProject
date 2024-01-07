import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleClickRandomHexColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const handleClickRandomRgbColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  useEffect(()=>{
    if(typeColor === 'rgb'){
        handleClickRandomRgbColor();
    }else{
        handleClickRandomHexColor();
    }
  },[typeColor])
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", background: color }}>
        <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeColor === "hex"
              ? handleClickRandomHexColor
              : handleClickRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection:'column',
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
          }}
        >
          <h3>{typeColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
