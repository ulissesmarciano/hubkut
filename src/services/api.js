import axios from "axios";

const githubToken = process.env.GITHUB_TOKEN;

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Authorization: `token ${githubToken}`,
  },
});

export default api;