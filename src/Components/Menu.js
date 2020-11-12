import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [selected, setSelected] = useState("");
  return (
    <div className="navbar">
      {/* <a
        className={selected === "Nosotras" ? "selected" : "idle"}
        onClick={() => setSelected("Nosotras")}
        href="nosotras"
      >
        Nosotras
      </a> */}
      <Link
        className={selected === "Nosotras" ? "selected" : "idle"}
        to="/nosotras"
        onClick={() => setSelected("Nosotras")}
      >
        Nosotras
      </Link>
      <Link
        className={selected === "Proyectos" ? "selected" : "idle"}
        onClick={() => setSelected("Proyectos")}
        to="/proyectos"
      >
        Proyectos
      </Link>
      <a
        className={selected === "Contacto" ? "selected" : "idle"}
        onClick={() => setSelected("Contacto")}
        href="/contacto"
      >
        Contacto
      </a>
    </div>
  );
}
