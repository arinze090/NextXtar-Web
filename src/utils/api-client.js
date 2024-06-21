import axios from "axios";
import store from "../redux/store";

export const baseURL = "https://singnify.com/api/v2/php/";

// using axios to create a reusuable instance across
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

// use the redux token as the token for intercxeptors
const addTokenToRequest = async (requestHeader) => {
  // const token = sessionStorage.getItem("#f8WEB#");
  const mToken = store.getState()?.user?.userToken;
  console.log("mtoken", mToken);

  requestHeader.headers.Authorization = `Bearer ${mToken}`;
  return requestHeader;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
