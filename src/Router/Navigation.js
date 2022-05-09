import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/profile/2">Profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
