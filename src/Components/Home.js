import React from "react";
import Menu from "./Menu";

export default function Home() {
  // <div id="circulo" className="yellowCircle"></div>
  //     </div>
  // circulin(){
  //   window.onload = function(){
  //     var bsDiv = document.getElementById("circulo");
  //     var blockHome = document.getElementById("blockHome")
  //     var x, y;
  //     setInterval(window.addEventListener('mousemove', function(event){
  //       x = event.clientX;
  //       y = event.clientY;

  //       if ( typeof x !== 'undefined' ){
  //         if(x < 700 && x > 500 && y < 400 && y > 200){
  //         bsDiv.style.left = x-250 + "px";
  //         bsDiv.style.top = y-250 + "px";
  //         }
  //       }
  //     },
  //     false
  //     )),300;
  //   }
  // }
  return (
    <div className="home">
      <div className="homeTop">
        <img src="images/homeTopRectangle.png" alt="" />
      </div>
      <div className="homeMiddle">
        <div className="textBlock">
          <img src="images/titulo.png" alt="" />
        </div>
        <img src="images/homeMiddleRectangle.png" alt="" />
      </div>
      <div className="homeBottom">
        <img src="images/homeBottomRectangle.png" alt="" />
      </div>
      <div>
        <Menu highlight="home" />
      </div>
    </div>
  );
}
