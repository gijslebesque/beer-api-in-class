import React, { Component, createRef } from "react";
import BeerService from "../api/BeerService";

export default class AddBeer extends Component {
  constructor() {
    super();
    this.state = {
      tagline: "",
      description: "",
      first_brewed: "",
      attenuation_level: "",
      brewers_tips: "",
      contributed_by: "",
      name: ""
    };
    this.form = createRef();
    this.beerService = new BeerService();
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = async e => {
    e.preventDefault();
    try {
      //   const data = new FormData(this.form.current);
      const newBeer = await this.beerService.addBeer(this.state);
      debugger;
    } catch (err) {
      debugger;
      console.log(err);
    }
  };

  on;
  render() {
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          ref={this.form}
          encType="multipart/form-data"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="Tagline"
            name="tagline"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="First brewed"
            name="first_brewed"
            onChange={this.onChangeHandler}
          />
          <input
            type="number"
            placeholder="Attenuation level"
            name="attenuation_level"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="Brewers tips"
            name="brewers_tips"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="Contributed by"
            name="contributed_by"
            onChange={this.onChangeHandler}
          />
          <input type="file" placeholder="Upload file" name="picture" />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  }
}
