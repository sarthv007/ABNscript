import React from "react";
import { Link, useNavigate } from "react-router-dom";
function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      AboutUs is Loaded
      <button onClick={() => navigate("/products")}>Product</button>
      <Link to="/">
        <button>Goto Home page</button>
      </Link>
    </div>
  );
}

export default AboutUs;
