import axios from "axios";

const token = process.env.REACT_APP_GITHUB_TOKEN;

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: `token ${token}`,
  },
});

export default api;
