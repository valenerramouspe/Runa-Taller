import React from "react";
import { useHistory } from "react-router-dom";
import { data } from "./Data";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PictureGrid from "./PictureGrid";

export default function Individual() {
  const params = useParams().id;
  let result = data.find((obj) => obj.id === params);
  let history = useHistory();
  return (
    <div
      className="individualContainer"
      style={{ backgroundColor: result.color }}
    >
      <button className="backButton" onClick={history.goBack}>
        <FontAwesomeIcon icon="arrow-left" />
      </button>
      <div className="individualProduct">
        <h1>{result.title}</h1>
        <p>{result.description}</p>
      </div>
      <PictureGrid images={result.images} />
    </div>
  );
}
