import React from "react";
import { Link } from "react-router-dom";

export default function Beer({
  name,
  image_url,
  _id,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
  isDetailed
}) {
  if (isDetailed) {
    return (
      <div>
        <img src={image_url} alt="" />
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
        <p>By: {contributed_by}</p>
      </div>
    );
  }
  return (
    <div>
      <p>
        <Link to={`/beer-detail/${_id}`}>{name}</Link>
      </p>
      <img src={image_url} alt="" />
    </div>
  );
}
