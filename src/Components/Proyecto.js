import React, { useState } from "react";

export default function Proyecto(props) {
  const [active, setActive] = useState(false);

  function handleOpen() {
    props.menuVisibility("open");
    setActive(true);
  }

  function handleClose() {
    props.menuVisibility("closed");
    setActive(false);
  }

  return (
    <div id="proyecto1" style={{ backgroundColor: props.color }}>
      <div
        style={{ backgroundColor: active ? props.popupColor : null }}
        className={active ? "coloredCuts" : "cuts"}
      >
        <div className={active ? "hola" : "cutTop"}>
          <img
            src={props.imgTop}
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
            alt=""
          />
        </div>
        <div className={active ? "hola" : "cutMiddle"}>
          <img
            src={props.imgMiddle}
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
            alt=""
          />
        </div>
        <div className={active ? "hola" : "cutBottom"}>
          <img
            src={props.imgBottom}
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
            alt=""
          />
        </div>
        <div className={active ? "visible" : "invisible"}>
          <p className="productTitle"> ALGIZ </p>
          <p className="productDescription">{props.description}</p>
          <button
            className="productsButton"
            style={{
              display: active ? "block" : "none",
              backgroundColor: props.buttonColor,
            }}
          >
            MORE
          </button>
        </div>

        <div
          style={{ display: "none" }}
          id="circulo"
          className="greenCircle"
        ></div>
        <div onClick={() => handleClose()} className="exit">
          X
        </div>
      </div>
    </div>
  );
}
