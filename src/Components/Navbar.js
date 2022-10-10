import React from "react";
import Logo from "./../Assests/pgh-logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Router>
        <nav class="navbar sticky-top bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">
              <img src={Logo} alt="#" />
            </a>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  File a Claim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"></a>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    </div>
  );
}
