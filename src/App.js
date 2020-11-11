import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./Components/Home";

export default function App(props) {
  return (
    <div>
      <Link to="/home">
        <img id="logoHome" src="images/Logo-home.png" />
      </Link>
      {props.children}
    </div>
  );
}
