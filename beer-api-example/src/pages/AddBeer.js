import React, { Component, createRef } from "react";
import Service from "../api/BeerService";

export default class AddBeer extends Component {
  constructor() {
    super();
    this.state = {
      tagline: "Nice fluffy Balena IPA",
      description: "Balena's love it, but orca's might too",
      first_brewed: "1992-10-10",
      attenuation_level: 19,
      brewers_tips: "Drink it without seawater",
      contributed_by: "The pimp shrimp",
      name: "Balena's beer"
    };
    this.form = createRef();
    this.service = new Service();
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = async e => {
    e.preventDefault();
    try {
      const data = new FormData(this.form.current);
      const newBeer = await this.service.addBeer(data);
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
          <input
            value={this.state.name}
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="Tagline"
            value={this.state.tagline}
            name="tagline"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            value={this.state.description}
            placeholder="Description"
            name="description"
            onChange={this.onChangeHandler}
          />
          <input
            value={this.state.first_brewed}
            type="text"
            placeholder="First brewed"
            name="first_brewed"
            onChange={this.onChangeHandler}
          />
          <input
            type="number"
            value={this.state.attenuation_level}
            placeholder="Attenuation level"
            name="attenuation_level"
            onChange={this.onChangeHandler}
          />
          <input
            value={this.state.brewers_tips}
            type="text"
            placeholder="Brewers tips"
            name="brewers_tips"
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            value={this.state.contributed_by}
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
