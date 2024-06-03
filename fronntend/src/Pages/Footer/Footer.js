import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./Footer.css";
import Home from "../Home/Home";
import About from "../About/About";

export default function Footer() {
  return (
    <div className="footer-main-background">
      <div className="flex-footer-1">
        <div>
          <h1 className="text">About</h1>
          <div className="flex-footer-2">
            <TiSocialFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaGooglePlusSquare className="icon" />
            <IoLogoInstagram className="icon" />
          </div>
        </div>
        <div>
          <h1>Quick Links</h1>
          <Link className="footer-element-2" to="/" element={<Home />}>
            Home
          </Link>
          <br />
          <Link className="footer-element-2" to="/About" element={<About />}>
            About
          </Link>
        </div>
        <h1>Newsletter</h1>
      </div>
      <div></div>
    </div>
  );
}
