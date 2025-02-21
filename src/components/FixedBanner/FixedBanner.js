import React from "react";
import { useLocation } from "react-router-dom";

const banners = {
  "/": "https://via.placeholder.com/1200x300?text=Home+Banner",
  "/about": "https://via.placeholder.com/1200x300?text=About+Us+Banner",
  "/services": "https://via.placeholder.com/1200x300?text=Services+Banner",
  "/contact": "https://via.placeholder.com/1200x300?text=Contact+Us+Banner",
};

const FixedBanner = () => {
  const location = useLocation;
  const bannerImage =
    banners[location.pathname] ||
    "https://via.placeholder.com/1200x300?text=Default+Banner";

  return (
    <>
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Page Banner"
          className="w-100 h-60 object-cover"
        />
      </div>
    </>
  );
};

export default FixedBanner;
