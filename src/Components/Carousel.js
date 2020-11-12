import React, { useState } from "react";
import Slider from "react-slick";
import Proyecto from "./Proyecto";
import Menu from "./Menu";

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
  const data = [
    {
      id: 1,
      imgTop: "images/algizTop.png",
      imgMiddle: "images/algizMiddle.png",
      imgBottom: "images/algizBottom.png",
      title: "ALGIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit",
      color: "#00ab4e",
    },
    {
      id: 2,
      imgTop: "images/algizTop.png",
      imgMiddle: "images/algizMiddle.png",
      imgBottom: "images/algizBottom.png",
      title: "ALGIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit",
      color: "yellow",
    },
    {
      id: 3,
      imgTop: "images/algizTop.png",
      imgMiddle: "images/algizMiddle.png",
      imgBottom: "images/algizBottom.png",
      title: "ALGIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit",
      color: "orange",
    },
    {
      id: 4,
      imgTop: "images/algizTop.png",
      imgMiddle: "images/algizMiddle.png",
      imgBottom: "images/algizBottom.png",
      title: "ALGIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blanditLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blanditLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blanditLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit",
      color: "aliceblue",
    },
    {
      id: 5,
      imgTop: "images/algizTop.png",
      imgMiddle: "images/algizMiddle.png",
      imgBottom: "images/algizBottom.png",
      title: "ALGIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit",
      color: "green",
    },
  ];

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
