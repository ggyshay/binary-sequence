import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { TokenInputPage } from "./pages/TokenInputPage";
import { ErrorPage } from "./pages/Error";
import { Login } from "./pages/Login";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState();
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    // API.onAuthorize(() => setIsAuthorized(true));

    const user = localStorage.getItem("user");
    if (user) {
      setIsLogedIn(user);
    }

    API.onOpen(async () => {
      setIsOpen(true);
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await API.authorize(token);
          console.log(res);
          setIsAuthorized(true);
        } catch (e) {
          console.error(e);
        }
      }
    });
  }, []);

  const handleLogout = () => {
    setIsLogedIn(false);
    setIsAuthorized(false);
    API.cancelSubscription();
  };
  if (!isLogedIn) {
    return <Login onLogin={setIsLogedIn} />;
  }
  if (err) {
    return <ErrorPage error={err} />;
  }
  if (!isOpen) {
    return <h1>Carregando...</h1>;
  }
  return isAuthorized ? (
    <Dashboard onError={setErr} logout={handleLogout} />
  ) : (
    <TokenInputPage onAuthorize={() => setIsAuthorized(true)} />
  );
}

export default App;