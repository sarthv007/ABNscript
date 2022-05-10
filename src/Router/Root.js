import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import Products from "./Products";
import Profile from "./Profile";

function Root() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div style={{ minHeight: "60vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />

            <Route path={"/profile/:id"} element={<Profile />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Root;
