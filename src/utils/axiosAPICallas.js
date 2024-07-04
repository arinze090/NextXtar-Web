import axios from "axios";
import { API_KEY } from "./devKeys";

const baseURL = "https://singnify.com/api/v2/php/";

export const axiosPost = ({ destinedRoute, data }) => {
  return axios
    .post(`${baseURL}${destinedRoute}?API_KEY=${API_KEY}`, data)
    .then((res) => res)
    .catch((err) => err);
};
