import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./page/homePage";
import AboutPage from "./page/aboutPage";
import "./Navigation.css";

function NavigationComponent() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
export default NavigationComponent;
