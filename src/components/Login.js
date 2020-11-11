import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.suxessrecords.com/wp-content/uploads/2019/04/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
