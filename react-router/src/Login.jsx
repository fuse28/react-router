import React from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  console.log(useAuth0);
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div className="container">
        <h1 className="welcome">Welcome to Login </h1>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button onClick={() => loginWithRedirect()}>Login</button>
      </div>
    </div>
  );
}
