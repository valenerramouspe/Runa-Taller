import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Proyecto(props) {
  const [active, setActive] = useState(false);

  let route = `project/id=${props.id}`;

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
          <p className="productTitle">{props.title}</p>
          <p className="productDescription">{props.description}</p>
          <Link to={route}>
            <button
              className="productsButton"
              style={{
                display: active ? "block" : "none",
                backgroundColor: props.buttonColor,
              }}
            >
              MORE
            </button>
          </Link>
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
