import React, { useState } from "react";
import Slider from "react-slick";
import Menu from "./Menu.js";
import Carousel from "./Carousel";
import Proyecto1 from "./Proyecto1";
import Proyecto2 from "./Proyecto2";

export default function Proyectos() {
  const [popup, setPopup] = useState("closed");

  // circulin(){
  //    window.onload = function(){
  //      var bsDiv = document.getElementById("circulo");
  //      var blockHome = document.getElementById("blockHome")
  //      var x, y;
  //      setInterval(window.addEventListener('mousemove', function(event){
  //        x = event.clientX;
  //        y = event.clientY;

  //        if ( typeof x !== 'undefined' ){
  //          if(x < 700 && x > 500 && y < 400 && y > 200){
  //          bsDiv.style.left = x-250 + "px";
  //          bsDiv.style.top = y-250 + "px";
  //          }
  //        }
  //      },
  //      false
  //      )),300;
  //    }
  //  }

  function menuVisibility(how) {
    setPopup(how);
    console.log(popup);
  }
  return (
    <div id="carousel">
      <p className="galeria">Galería</p>
      <Carousel
        arrow={popup}
        proyectos={[
          <Proyecto1 menuVisibility={menuVisibility} />,
          <Proyecto2 />,
        ]}
      />
      <div className={popup === "closed" ? "visibleMenu" : "invisibleMenu"}>
        <Menu highlight="Galeria" />
      </div>
    </div>
  );
}
