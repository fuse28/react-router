import React from "react";
import "./Home.css";
import Card from "./Card";

export default function Home() {
  return (
    <div className="home">
      <h4>
        Welcome to home page
        <div className="home-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </h4>
    </div>
  );
}
