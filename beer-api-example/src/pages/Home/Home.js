import React from "react";
import { config } from "./config";
import NavComponent from "../../components/NavComponent";

export const Home = () => {
  const renderNavComps = () => {
    return config.map(c => <NavComponent {...c} />);
  };

  return <div className="container">{renderNavComps()}</div>;
};
