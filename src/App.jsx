import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { TokenInputPage } from "./pages/TokenInputPage";
import { ErrorPage } from "./pages/Error";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState();
  useEffect(() => {
    API.onAuthorize(() => setIsAuthorized(true));
    API.onOpen(() => {
      setIsOpen(true);
    });
  }, []);
  if (err) {
    return <ErrorPage error={err} />;
  }
  if (!isOpen) {
    return <h1>Carregando...</h1>;
  }
  return isAuthorized ? <Dashboard onError={setErr} /> : <TokenInputPage />;
}

export default App;
