import React from "react";

const NewsArticleNew = () => {
  const { photos } = this.props;
  const { imageUrl, earthdate } = photos;
  return (
    <div className="card w-100" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={imageUrl} className="card-img-top mb-3" alt={"Nasa"} />
        <h4>{earthdate}</h4>
        {/* <h6>{cameraFullName}</h6>
          <p className="card-text">{cameraName}</p> */}
      </div>
    </div>
  );
};

export default NewsArticleNew;
