import React, { useState } from "react";

export default function Proyecto1(props) {
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
    <div id="proyecto1">
      <div className={active ? "coloredCuts" : "cuts"}>
        <div className={active ? "hola" : "cutTop"}>
          <img
            src="images/algizTop.png"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
          />
        </div>
        <div className={active ? "hola" : "cutMiddle"}>
          <img
            src="images/algizMiddle.png"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
          />
        </div>
        <div className={active ? "hola" : "cutBottom"}>
          <img
            src="images/algizBottom.png"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen()}
          />
        </div>
        <div className={active ? "visible" : "invisible"}>
          <p className="productTitle"> ALGIZ </p>
          <p className="productDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            nisi id nunc consectetur porta et ac lorem. Nunc fringilla
            condimentum augue vitae tincidunt. Curabitur pharetra imperdiet
            turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut
            faucibus gravida, nisi massa dignissim nulla, et interdum eros
            tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui
            varius finibus. Mauris tristique facilisis odio, id dictum leo
            egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed
            leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit
            amet mauris. Duis et velit auctor, euismod nibh at, porta sapien.
            Aenean vehicula, ex non commodo tristique, urna sem pretium lorem,
            eget pellentesque erat massa at massa. Nam consequat purus venenatis
            blandit blandit
          </p>
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
