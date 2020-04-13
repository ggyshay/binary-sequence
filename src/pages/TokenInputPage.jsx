import React, { useState } from "react";
import { API } from "../api";

export const TokenInputPage = (props) => {
  const [token, setToken] = useState("");

  const handleSubmit = async () => {
    const res = await API.authorize(token);
    console.log(res);
    localStorage.setItem("token", token);
    props.onAuthorize();
  };

  return (
    <div>
      <p>Token da binary</p>
      <input onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
};
