import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/Error";
import { Login } from "./pages/Login";
import { IndexScreen } from "./pages/IndexScreen";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [showIndexScreen, setShowIndexScreen] = useState(false);
  const [resolution, setResolution] = useState(2);
  useEffect(() => {
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

  const changeSymbol = (newSymbol, resolution) => {
    API.symbol = newSymbol;
    setResolution(resolution);
    API.reset();
    setShowIndexScreen(false);
  };
  if (showIndexScreen) {
    return <IndexScreen onChange={changeSymbol} />;
  }
  if (!isLogedIn || !isAuthorized) {
    return <Login onLogin={setIsLogedIn} onAuthorize={setIsAuthorized} />;
  }
  if (err) {
    return <ErrorPage error={err} />;
  }
  if (!isOpen) {
    return <h1>Carregando...</h1>;
  }
  return (
    isAuthorized && (
      <Dashboard
        onError={setErr}
        logout={handleLogout}
        showIndexScreen={() => setShowIndexScreen(true)}
        resolution={resolution}
      />
    )
  );
}

export default App;
