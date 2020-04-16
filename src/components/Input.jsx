import React from "react";

export const Input = (props) => (
  <div>
    <p>{props.label}</p>
    <input
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
    />
  </div>
);
