import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/animate.min.css"
import "../src/assets/css/lightbox.min.css"
import "../src/assets/css/owl.carousel.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById("mainframe"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
