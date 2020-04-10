import React, { useState } from "react";
import { API } from "./api";
import { useEffect } from "react";

export const TokenInputPage = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setTimeout(() => {
      API.setUserToken("NFWCiCO9iGBTPnW");
    }, 1000);
  }, []);
  const handleSubmit = () => {
    API.setUserToken(token);
  };

  return (
    <div>
      <p>Token da binary</p>
      <input onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
};
