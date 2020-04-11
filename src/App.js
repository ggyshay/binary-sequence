import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { Dashboard } from "./Dashboard";
import { TokenInputPage } from "./TokenInputPage";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    API.onAuthorize(() => setIsAuthorized(true));
    API.onOpen(() => {
      setIsOpen(true);
    });
  }, []);
  if (!isOpen) {
    return <h1>Carregando...</h1>;
  }
  return isAuthorized ? <Dashboard /> : <TokenInputPage />;
}

export default App;
