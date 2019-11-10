import React, { Component, createRef } from "react";
import BeerService from "../api/BeerService";

export default class AddBeer extends Component {
  constructor() {
    super();

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
      const data = new FormData(this.form.current);
      const newBeer = await this.beerService.addBeer(data);
      this.props.history.push(`/beer-detail/${newBeer._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          ref={this.form}
          encType=" multipart/form-data"
        >
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Tagline" name="tagline" />
          <input type="text" placeholder="Description" name="description" />
          <input type="text" placeholder="First brewed" name="first_brewed" />
          <input
            type="number"
            placeholder="Attenuation level"
            name="attenuation_level"
          />
          <input type="text" placeholder="Brewers tips" name="brewers_tips" />
          <input
            type="text"
            placeholder="Contributed by"
            name="contributed_by"
          />
          <input type="file" placeholder="Upload file" name="picture" />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  }
}
