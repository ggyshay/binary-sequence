import React from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = (props) => {
  return (
    <div className="tg-group">
      <div
        className={"tg-container" + (props.isOn ? " tg-on" : "")}
        onClick={props.onClick}
      >
        <div className="tg-slider" />
      </div>
      {props.label && <p className="tg-label">{props.label}</p>}
    </div>
  );
};
