import React from "react";
import { useState } from "react";

export const IndexScreen = (props) => {
  const [value, setValue] = useState("R_100");
  return (
    <>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="R_100">R_100</option>
        <option value="R_75">R_75</option>
        <option value="R_50">R_50</option>
        <option value="R_25">R_25</option>
        <option value="R_10">R_10</option>
      </select>
      <button onClick={() => props.onChange(value, decimalPlacesDict[value])}>
        Confirmar
      </button>
    </>
  );
};

const decimalPlacesDict = {
  R_100: 2,
  R_75: 4,
  R_50: 4,
  R_25: 3,
  R_10: 3,
};
