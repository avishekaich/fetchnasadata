import React from "react";
import { useLocation } from "react-router-dom";

const banners = {
  "/": "https://via.placeholder.com/1200x300?text=Home+Banner",
  "/About":
    "https://www.shutterstock.com/shutterstock/photos/2473217271/display_1500/stock-photo-beautiful-mountain-landscapes-in-torres-del-paine-national-park-chile-world-famous-hiking-region-2473217271.jpg",
  "/Homepage": "https://via.placeholder.com/1200x300?text=Services+Banner",
  "/Contact":
    "https://www.shutterstock.com/shutterstock/photos/2521386695/display_1500/stock-photo-using-the-laptop-to-show-the-icon-address-phone-email-call-to-contact-customer-support-help-2521386695.jpg",
};

const FixedBanner = () => {
  const location = useLocation();
  const bannerImage =
    banners[location.pathname] ||
    "https://via.placeholder.com/1200x300?text=Default+Banner";

  return (
    <>
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Page Banner"
          className="w-100 h-60 img-fluid"
        />
      </div>
    </>
  );
};

export default FixedBanner;
