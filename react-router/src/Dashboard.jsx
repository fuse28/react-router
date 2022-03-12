import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const navigativeToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={navigativeToHome}>Go to home</button>
    </div>
  );
}
