import React, { useState } from "react";
//import Link from 'react-router';

export default function Menu() {
  const [selected, setSelected] = useState("");
  return (
    <div className="navbar">
      <a
        className={selected == "Nosotras" ? "selected" : "idle"}
        onClick={() => setSelected("Nosotras")}
        href="#nosotras"
      >
        Nosotras
      </a>
      <a
        className={selected == "Galeria" ? "selected" : "idle"}
        onClick={() => setSelected("Galeria")}
        href="#galeria"
      >
        Proyectos
      </a>
      <a
        className={selected == "Tienda Online" ? "selected" : "idle"}
        onClick={() => setSelected("Tienda Online")}
        href="#tienda"
      >
        Packaging Bio
      </a>
    </div>
  );
}
