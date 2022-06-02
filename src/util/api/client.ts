import axios from "axios";
import qs from "qs";

const client = axios.create();

client.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

if (process.env.NODE_ENV === "development") {
  client.defaults.baseURL = "http://localhost:3000";
} else {
  client.defaults.baseURL = "https://securehttp.resumerry.com";
}

const token = localStorage.getItem("userToken");

if (token) {
  client.defaults.headers.common = {
    Authorization: `bearer ${token}`,
  };
}

export default client;
