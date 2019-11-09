import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent({ link, header, className, body }) {
  return (
    <div>
      <div className={`nav-item ${className}`}></div>
      <Link to={link}>
        <h1> {header}</h1>
      </Link>
      <p>{body}</p>
    </div>
  );
}
