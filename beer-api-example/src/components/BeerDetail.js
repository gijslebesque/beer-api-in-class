import React from "react";

export const BeerDetail = ({ name, image_url, description }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image_url} />
      <p>{description}</p>
    </div>
  );
};
