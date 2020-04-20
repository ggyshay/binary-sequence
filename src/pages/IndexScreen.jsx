import React from "react";

export const IndexScreen = (props) => {
  return (
    <select onChange={(e) => props.onChange(e.target.value)}>
      <option value="R_100">R_100</option>
      <option value="R_75">R_75</option>
      <option value="R_50">R_50</option>
      <option value="R_25">R_25</option>
      <option value="R_10">R_10</option>
    </select>
  );
};
