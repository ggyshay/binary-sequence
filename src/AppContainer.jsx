import React, { useState, useEffect } from "react";
import { Splash } from "./pages/Splash";
import App from "./App";
import { API } from "./api";

function AppHolder(props) {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleLogout = () => {
    setIsLogedIn(false);
    setIsAuthorized(false);
    API.cancelSubscription();
  };

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

  if (showSplash) {
    return <Splash onLogin={() => setShowSplash(false)} />;
  }

  return (
    <App
      isAuthorized={isAuthorized}
      isOpen={isOpen}
      isLogedIn={isLogedIn}
      logout={handleLogout}
      setIsAuthorized={setIsAuthorized}
      setIsLogedIn={setIsLogedIn}
    />
  );
}

export default AppHolder;
