import React, { Component } from "react";
import { config } from "./config";
import NavComponent from "../../components/NavComponent";

export default class Home extends Component {
  renderNavComponts = () => {
    return config.map(c => <NavComponent {...c} />);
  };
  render() {
    return <div>{this.renderNavComponts()}</div>;
  }
}
