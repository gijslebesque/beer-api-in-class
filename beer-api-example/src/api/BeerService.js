import axios from "axios";

export default class BeerService {
  constructor() {
    //create an instance of axios. axios.create defines the basic setup for our api calls.
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BEER_API_URL, //the url
      withCredentials: true // allows CORS (more on that later)
    });
  }

  // exportable method that will actually make the GET request.
  getAllBeers = async () => {
    // the parameter is the endpoint of the api.
    // deconstuct data from the api return.
    const { data } = await this.service.get("beers");
    return data;
  };

  getOneBeer = async id => {
    const { data } = await this.service.get(`beers/${id}`);
    return data;
  };

  getRandomBeer = async () => {
    debugger;
    const { data } = await this.service.get(`beers/random`);
    return data;
  };
}

// in the component where you use the service don't forget to create an instance of this class.

// this.service = new BeerService();
