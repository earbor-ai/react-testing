import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const [data, setData] = useState({
    username: "ram",
    password: "test5",
  });

  const navigate = useNavigate();
  const login = () => {
    axios({
      method: "POST",
      url: "/Auth/login",
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        cookies.set("myToken", response.data["token"], { path: "/" });
        cookies.set("refreshTok", response.data["refreshToken"], { path: "/" });
        console.log(response.data["token"]);
        if (response.data["token"]) {
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <main className="form-signin w-100 m-auto">
      <form style={{ width: "20%", margin: "auto" }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button
          className="w-100 btn btn-lg btn-primary"
          type="button"
          onClick={login}
        >
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Login;
