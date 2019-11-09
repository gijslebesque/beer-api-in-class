import React from "react";
import { Link } from "react-router-dom";

export default function Beer({ name, image_url, _id }) {
  return (
    <div>
      <p>
        <Link to={`/beer-detail/${_id}`}>{name}</Link>
      </p>
      <img src={image_url} alt="" />
    </div>
  );
}
