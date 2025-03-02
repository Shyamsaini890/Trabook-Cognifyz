import React from "react";
import Vector from "./images/vector.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div class="navh1">
          <h1 style={{ widows: "30%" }}>
            Trabook <img src={Vector} />
          </h1>
        </div>
        <div class="navlink">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact Us
          </Link>
          <Link to="skills" style={{ textDecoration: "none", color: "black" }}>
            Skills
          </Link>
        </div>
        <div class="btn">
          <Link style={{ color: "#FD8D3A", textDecoration: "none" }} to="login">
            Login
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FA7436",
              border: "none",
              width: "100px",
              height: "30px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "white",
            }}
            to="signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
