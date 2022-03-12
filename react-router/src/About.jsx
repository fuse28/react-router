import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>you're in About Page</h1>
      <Link to="/">
        <p>Go to home</p>
      </Link>
      <Link to="/dashboard">
        <p>Go to dashboard</p>
      </Link>
    </div>
  );
}
