import React, { useState } from "react";
import Menu from "./Menu";

export default function Contacto() {
  let [sent, setSent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }
  function isSent() {
    if (sent) {
      return (
        <div>
          <p className="thankYou">
            Muchas gracias, nos pondremos en contacto a la brevedad
          </p>
        </div>
      );
    } else {
      return (
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <input
              className="emailInput"
              type="email"
              placeholder="Email"
            ></input>
            <textarea
              className="contactMessage"
              type="text"
              placeholder="Escribe tu mensaje"
            ></textarea>
            <input className="formButton" type="submit" value="ENVIAR"></input>
          </form>
        </div>
      );
    }
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "#dada00",
          height: "100vh",
          width: "100vw",
          display: "table",
        }}
      >
        <h2 className="contactHeader">CONTACTO</h2>
        {isSent()}
      </div>
      <Menu />
    </div>
  );
}
