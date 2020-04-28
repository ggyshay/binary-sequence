import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/Error";
import { IndexScreen } from "./pages/IndexScreen";
import { Login } from "./pages/Login";

function App(props) {
  // const [isAuthorized, setIsAuthorized] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState();
  // const [isLogedIn, setIsLogedIn] = useState(false);
  const [showIndexScreen, setShowIndexScreen] = useState(false);
  const [resolution, setResolution] = useState(2);
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setIsLogedIn(user);
  //   }

  //   API.onOpen(async () => {
  //     setIsOpen(true);
  //     debugger;
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const res = await API.authorize(token);
  //         console.log(res);
  //         setIsAuthorized(true);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }
  //   });
  // }, []);

  const changeSymbol = (newSymbol, resolution) => {
    API.symbol = newSymbol;
    setResolution(resolution);
    API.reset();
    setShowIndexScreen(false);
  };

  if (showIndexScreen) {
    return <IndexScreen onChange={changeSymbol} />;
  }
  if (!props.isLogedIn || !props.isAuthorized) {
    return (
      <Login onLogin={props.setIsLogedIn} onAuthorize={props.setIsAuthorized} />
    );
  }
  if (err) {
    return <ErrorPage error={err} />;
  }
  if (!props.isOpen) {
    return <h1>Carregando...</h1>;
  }
  return (
    props.isAuthorized && (
      <Dashboard
        onError={setErr}
        logout={props.logout}
        showIndexScreen={() => setShowIndexScreen(true)}
        resolution={resolution}
      />
    )
  );
}

export default App;
