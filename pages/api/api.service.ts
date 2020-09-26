import axios from "axios";

export abstract class ApiService {
  protected static get(url: string) {
    return axios.get(url).then(response => response.data);
  }
}