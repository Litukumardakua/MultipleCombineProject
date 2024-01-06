//single selection Accordian
//multi selection Accordian

import React, { useState } from "react";
import { data } from "./Datajson";
import "./Style.css";

const Accordian = () => {
  const [selection, setSelection] = useState(null);
  const [anableMultiSelection, setAnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelection(getCurrentId === selection ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setAnableMultiSelection(!anableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    anableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {anableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selection === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selection === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>No data forund</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
