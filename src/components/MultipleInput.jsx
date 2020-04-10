import React from "react";

export const MultipleInput = (props) => {
  return (
    <div style={{ display: "flex", marginLeft: 32, alignItems: "center" }}>
      <button
        style={{ height: 25, margin: 16 }}
        onClick={() => props.onChange(props.value / 2)}
      >
        ÷2
      </button>
      <div>
        <p style={{ fontSize: 10, marginBottom: 5 }}>Quantidade de açoes</p>
        <input
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
      <button
        style={{ height: 25, margin: 16 }}
        onClick={() => props.onChange(props.value * 2)}
      >
        x2
      </button>
    </div>
  );
};
