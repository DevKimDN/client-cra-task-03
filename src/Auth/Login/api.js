import axios from "axios";

export default class LoginAPI {
  static login({ email, password }) {
    return axios.post(process.env.REACT_APP_SERVER_URL+"/api/login", {
      email,
      password,
    });
  }
}
