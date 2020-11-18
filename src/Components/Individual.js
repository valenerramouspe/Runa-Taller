import React from "react";
import { data } from "./Data";
import { useParams } from "react-router-dom";

export default function Individual(props) {
  const params = useParams().id;
  var result = data.find((obj) => obj.id === params);
  console.log(result);
  return (
    <div style={{ backgroundColor: result.color }}>
      <p>{result.title}</p>
      <p>{result.description}</p>
    </div>
  );
}
