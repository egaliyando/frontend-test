import axios from "axios";

const instance = axios.create({
  baseURL: "http://f-test.dalenta.tech/",
});

export default instance;
