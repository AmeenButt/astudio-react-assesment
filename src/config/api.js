import axios from "axios";

// Create an instance of Axios with a custom configuration

export const api = axios.create({
  baseURL: "https://dummyjson.com", // Set your base URL here
});
