import React, { useState } from "react";
import { auth } from "../auth";
import { API } from "../api";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const res = await auth(email, password, token);
    console.log(res);
    if (res) {
      localStorage.setItem("user", res);
      props.onLogin(res);
      await API.authorize(token);
      localStorage.setItem("token", token);
      props.onAuthorize(true);
    }
  };

  return (
    <div>
      <p><b>Email</b></p>
      <input onChange={(e) => setEmail(e.target.value)} value={email} />
      <p><b>Senha</b></p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <p><b>Token da binary</b></p>
      <input onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};
