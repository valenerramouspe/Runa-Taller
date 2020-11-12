import React from "react";
import Slider from "react-slick";

export default function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: props.arrow === "closed" ? true : false,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.proyectos.map((proyecto, i) => (
          <div key={i}>{proyecto}</div>
        ))}
      </Slider>
    </div>
  );
}
