import React, { useState } from "react";
import { auth } from "../auth";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const res = await auth(email, password);
    console.log(res);
    if (res) {
      localStorage.setItem("user", res);
      props.onLogin(res);
    }
  };
  return (
    <div>
      <p>Email</p>
      <input onChange={(e) => setEmail(e.target.value)} value={email} />
      <p>Senha</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};
