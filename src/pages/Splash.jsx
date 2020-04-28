import React from "react";
import "./Splash.css";

export const Splash = (props) => (
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <p>Indicador VM®</p>
      <img
        src={require("../images/logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <p onClick={props.onLogin} style={{ color: "blue", cursor: "pointer" }}>
        Login
      </p>
    </div>
    <div className="splash-horizontal-container">
      <div className="splash-item">
        <p>Aviso 1</p>
        <p>Aqui somente texto</p>
      </div>
      <div className="splash-item">
        <p>Aviso 2</p>
        <p>Aqui somente texto</p>
      </div>
      <div className="splash-item">
        <p>Aviso 3</p>
        <p>Aqui somente texto</p>
      </div>
    </div>
    <div style={{ display: "flex", paddingLeft: 16 }}>
      <p>Suporte: 119999999999</p>
      <img
        src={require("../images/logo.png")}
        style={{ width: 50, height: 50 }}
      />
    </div>
  </div>
);
