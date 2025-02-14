import React, { Component } from "react";

export default class NewsArticle extends Component {
  render() {
    const {
      id,
      img_src,
      earth_date,
      camera: { name: cameraName, full_name: cameraFullName },
      rover: { name: roverName, landing_date, launch_date, status },
    } = this.props;

    return ({
      id,
      img_src,
      earth_date,
      cameraName,
      cameraFullName,
      roverName,
      landing_date,
      launch_date,
      status,
    });

    // let { photos } = this.props;
    // let { earthdate = "Unknown Date", camera, imageUrl } = photos || {};
    // const { cameraFullName = "Unknown Camera", cameraName = "Unknown" } =
    //   camera || {};

    return (
      <>
      <div className="card w-100" style={{ width: "18rem" }} key={id}>
        <div className="card-body">
          <img src={img_src} className="card-img-top mb-3" alt={"Nasa"} />
          <h4>{earth_date}</h4>
          <h6>{cameraFullName}</h6>
          <p className="card-text">{cameraName}</p>
          {/* <p>{roverName}-{status}</p>
          <p>{landing_date}-{launch_date}</p> */}
        </div>
      </div></>
    );
  }
}
