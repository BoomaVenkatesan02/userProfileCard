import React, { useState } from "react";

function ColorChanger() {
  //one color change
  // const[existColor, updatedColor] = useState("Red");
  // const updateColor = () =>
  // {
  //     updatedColor((previousColor) => (previousColor === "Red" ? 'Blue' : 'Red'));
  // };

  // return(
  //     <>
  //     <div style={{backgroundColor: existColor,  border: "1px solid", padding: "15px"}}>{existColor}</div>
  //     <button onClick={updateColor}>Change Color</button>
  //     </>
  // );

  /** MULTIPLE COLOR CHANGE  ****/
  const multipleColor = ["Red", "Blue", "Yellow", "Green", "Grey"];
  const [currentClrIndex, setCurrentClrIndex] = useState(0);

  const updateClrIndexVal = () => {
    setCurrentClrIndex(
      (prevIndexVal) => (prevIndexVal + 1) % multipleColor.length
    );
  };

  return (
    <>
      <h3>Multiple Color Changes</h3>
      <div
        style={{
          border: "1px solid",
          padding: "19px",
          width: "30px",
          backgroundColor: multipleColor[currentClrIndex],
        }}
      >
        {multipleColor[currentClrIndex]}
      </div>
      <div>&nbsp;</div>
      <button onClick={updateClrIndexVal}>Change Color</button>
    </>
  );
}
export default ColorChanger;
