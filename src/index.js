import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import Nosotras from "./Components/Nosotras";
import Carousel from "./Components/Carousel";
import Contacto from "./Components/Contacto";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/nosotras">
        <Nosotras />
      </Route>
      <Route path="/proyectos">
        <Carousel />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
    </Switch>
  </BrowserRouter>,
  /* </React.StrictMode> */ document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
