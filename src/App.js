import React, { Component } from "react";
import Topbar from "./components/TopBar/Topbar";
import Navhero from "./components/NavHero/Navhero";
import { Route, Routes } from "react-router-dom";
//import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Loader /> */}
        <Topbar />
        <Navhero />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </>
    );
  }
}
