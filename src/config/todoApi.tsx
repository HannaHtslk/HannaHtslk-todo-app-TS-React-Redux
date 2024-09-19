import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default todoApi;
