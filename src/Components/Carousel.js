import React, { useState } from "react";
import Slider from "react-slick";
import Proyecto from "./Proyecto";
import Menu from "./Menu";
import { data } from "./Data";

export default function Carousel(props) {
  const [popup, setPopup] = useState("closed");

  function menuVisibility(how) {
    setPopup(how);
    console.log(popup);
  }
  var settings = {
    dots: popup === "closed" ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: popup === "closed" ? true : false,
  };
  return (
    <div>
      <div id="carousel">
        <Slider {...settings}>
          {data.map((proyecto, i) => (
            <Proyecto
              key={proyecto.id}
              menuVisibility={menuVisibility}
              imgTop={proyecto.imgTop}
              imgMiddle={proyecto.imgMiddle}
              imgBottom={proyecto.imgBottom}
              title={proyecto.title}
              description={proyecto.description}
              color={proyecto.color}
              popupColor={proyecto.popupColor}
              buttonColor={proyecto.buttonColor}
            />
          ))}
        </Slider>
      </div>
      <div className={popup === "closed" ? "visibleMenu" : "invisibleMenu"}>
        <Menu highlight="Galeria" />
      </div>
    </div>
  );
}
