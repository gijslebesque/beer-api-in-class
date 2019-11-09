import React, { Component } from "react";
import BeerService from "../api/BeerService";
import Beer from "../components/Beer";
import Loader from "../components/Loader";

export default class AllBeers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allBeers: [],
      isLoading: true
    };
    this.beerService = new BeerService();
  }

  componentDidMount = async () => {
    try {
      const allBeers = await this.beerService.getAllBeers();
      this.setState({ allBeers, isLoading: false });
    } catch (err) {
      debugger;
      console.log(err);
    }
  };

  renderBeers = () => {
    return this.state.allBeers.map(oneBeer => {
      return <Beer {...oneBeer} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Hello here are all the beers</h1>
        {this.state.isLoading && <Loader />}
        {this.renderBeers()}
      </div>
    );
  }
}
