import Axios from 'axios';
import RestApi from "services/Api/RestApi";
import {parseResponse} from "services/Api/apiHelpers";
export class ApiSingleton {

  constructor() {
    const httpConfig = {
      baseURL: process.env.REACT_APP_API,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
    this.client = Axios.create(httpConfig);
    this.planets = new RestApi(this.client,'planets',parseResponse)
    this.starships = new RestApi(this.client,'starships',parseResponse)
    this.people = new RestApi(this.client,'people',parseResponse)
    this.vehicles = new RestApi(this.client,'vehicles',parseResponse)

  }
  static get instance() {
    return this._instance || (this._instance = new this());
  }

}
const Api = ApiSingleton.instance;

export default Api;
