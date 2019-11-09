import React, { Component } from "react";
import BeerService from "../api/BeerService";
import { BeerDetail } from "../components/BeerDetail";

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: null
    };
    this.beerService = new BeerService();
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    try {
      const beer = await this.beerService.getOneBeer(id);
      this.setState({ beer });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <div>{this.state.beer && <BeerDetail {...this.state.beer} />}</div>;
  }
}
