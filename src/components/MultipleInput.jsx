import React from "react";

export const MultipleInput = (props) => {
  return (
    <div style={{ display: "flex", marginLeft: 32, alignItems: "center" }}>
      <div>
        <p style={{ fontSize: 10, marginBottom: 5 }}>Quantidade de açoes</p>
        <input
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
