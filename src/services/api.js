import axios from "axios";

//const token = process.env.REACT_APP_GITHUB_TOKEN; //adicionar para renderização local

const api = axios.create({
  baseURL: "https://api.github.com/users/",

  headers: {
    //Authorization: `token ${token}`, //adicionar para renderização local
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default api;
