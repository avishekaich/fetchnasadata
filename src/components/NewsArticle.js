import React, { Component } from "react";

export default class NewsArticle extends Component {
  render() {
    let { earthdate='Unknown Date', camera, imageUrl } = this.props;
    const { cameraFullName='Unknown Camera', cameraName='Unknown' } = camera || {};
    return (
      <div className="card w-100" style={{ width: "18rem" }}>
        <div className="card-body">
          <img src={imageUrl} className="card-img-top mb-3" alt={"Nasa"} />
          <h4>{earthdate}</h4>
          <h6>{cameraFullName}</h6>
          <p className="card-text">{cameraName}</p>
        </div>
      </div>
    );
  }
}
