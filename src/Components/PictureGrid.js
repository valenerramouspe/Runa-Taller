import react from "react";

export default function PictureGrid(props) {
  console.log(props.images);
  return (
    <div className="container">
      <div className="gridDiv row">
        {props.images.map((image, i) => (
          <div key={i} className="gridImage col-3">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
