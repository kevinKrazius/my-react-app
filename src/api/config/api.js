import axios from "axios";

const apiV1 = axios.create({
  baseURL: "http://localhost:5050/v1",
});

export default apiV1;
