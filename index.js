import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v2',
  withCredentials: true
});

function login() {
  api.post("/auth/login", {
    username: "admin",
    password: "admin"
  }).then(() => api.get("/auth/me"))
  .then(me => {
    document.querySelector("#userinfo").innerHTML = JSON.stringify(me.data, undefined, 2);
  });
}

window.login = login;