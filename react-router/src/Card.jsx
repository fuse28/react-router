import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <p>Hey my name is</p>
      <p>Aatish</p>
      <Link to="./dashboard" className="text">
        <p>Wanna know more?? click here</p>
      </Link>
    </div>
  );
}
