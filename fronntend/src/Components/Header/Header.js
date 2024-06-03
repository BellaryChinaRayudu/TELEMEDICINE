import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-bg">
      <div className="headerflex">
        <h1 className="header-item-spacing">Home</h1>
        <h1 className="header-item-spacing">About</h1>
        <h1 className="header-item-spacing">Contact</h1>
        <Link to="/book-appointment">
          <button className="btn btn-primary header-item-spacing">
            {" "}
            Make an Appointment
          </button>
        </Link>
        <Link to="/lobby">
          <button className="btn btn-primary header-item-spacing">
            Meeting Room
          </button>
        </Link>
      </div>
    </div>
  );
}
