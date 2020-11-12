//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function App(props) {
  return (
    <div>
      <Link to="/">
        <img id="logoHome" src="images/Logo-home.png" alt="" />
      </Link>
      {props.children}
    </div>
  );
}
