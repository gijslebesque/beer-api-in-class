import React, { Component } from "react";
import BeerService from "../api/BeerService";
import Beer from "../components/Beer";

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
    let beer;
    try {
      if (id) beer = await this.beerService.getOneBeer(id);
      else beer = await this.beerService.getRandomBeer();
      this.setState({ beer });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>One single Beer</h1>
        {<Beer {...this.state.beer} isDetailed />}
      </div>
    );
  }
}
