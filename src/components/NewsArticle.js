import React, { Component } from "react";

export default class NewsArticle extends Component {
  render() {
    const { img_src, earth_date } = this.props;
    // let { photos } = this.props;
    // let { earthdate = "Unknown Date", camera, imageUrl } = photos || {};
    // const { cameraFullName = "Unknown Camera", cameraName = "Unknown" } =
    //   camera || {};
    return (
      <div className="card w-100" style={{ width: "18rem" }}>
        <div className="card-body">
          <img src={img_src} className="card-img-top mb-3" alt={"Nasa"} />
          <h4>{earth_date}</h4>
          {/* <h6>{cameraFullName}</h6>
          <p className="card-text">{cameraName}</p> */}
        </div>
      </div>
    );
  }
}
