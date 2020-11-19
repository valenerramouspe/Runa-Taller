//import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Link } from "react-router-dom";
library.add(fab, faCheckSquare, faCoffee, faArrowLeft);

export default function App(props) {
  return (
    <div className="App">
      <Link to="/">
        <img id="logoHome" src="images/Logo-home.png" alt="" />
      </Link>
      {props.children}
    </div>
  );
}
