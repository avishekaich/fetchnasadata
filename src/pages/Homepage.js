import React from "react";
import DataInTable from "../components/DataInTable";
// import Navbar from "../components/Navbar";
//import News from "../components/News";
//import NewsNew from "../components/NewsNew";

export default function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 d-none">
          {/* <Navbar title={"Hello World"} AboutLink={"About Us"} newsLink={"News New"} /> */}
        </div>
        <div className="col-sm-12">
          <DataInTable />
          {/* <NewsNew /> */}
          {/* <News /> */}
        </div>
      </div>
    </div>
  );
}
