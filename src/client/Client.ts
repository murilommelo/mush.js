import { API } from "./API.js";

export class MushClient {
  declare api: API;

  constructor() {
    this.api = new API();
  }
}
