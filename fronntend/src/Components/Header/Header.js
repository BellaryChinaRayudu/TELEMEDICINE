import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="headerflex">
        <Link className="nav-element" to="/" element={<Home />}>
          <h1>Home</h1>
        </Link>
        <Link className="nav-element" to="/About" element={<About />}>
          <h1> About</h1>
        </Link>

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
