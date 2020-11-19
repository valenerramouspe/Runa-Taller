import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  let [selected, setSelected] = useState(props.highlight);
  return (
    <div className="nav">
      {/* <a
        className={selected === "Nosotras" ? "selected" : "idle"}
        onClick={() => setSelected("Nosotras")}
        href="nosotras"
      >
        Nosotras
      </a> */}
      <Link
        style={{ textDecoration: "none" }}
        className={selected === "Nosotras" ? "selected" : "idle"}
        to="/nosotras"
        onClick={() => setSelected("Nosotras")}
      >
        Nosotras
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        className={selected === "Proyectos" ? "selected" : "idle"}
        onClick={() => setSelected("Proyectos")}
        to="/proyectos"
      >
        Proyectos
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        className={selected === "Contacto" ? "selected" : "idle"}
        onClick={() => setSelected("Contacto")}
        to="/contacto"
      >
        Contacto
      </Link>
    </div>
  );
}
