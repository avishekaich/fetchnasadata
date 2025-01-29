import React from "react";
// import Navbar from "../components/Navbar";
import News from "../components/News";

export default function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 d-none">
          {/* <Navbar title={"Hello World"} AboutLink={"About Us"} newsLink={"News New"} /> */}
        </div>
        <div className="col-sm-12">
          <News />
        </div>
      </div>
    </div>
  );
}
