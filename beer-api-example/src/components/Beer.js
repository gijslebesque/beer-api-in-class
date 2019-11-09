import React from "react";

export default function Beer({ name, image_url }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image_url} alt="" />
    </div>
  );
}
