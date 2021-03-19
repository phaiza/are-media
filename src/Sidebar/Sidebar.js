import React from "react";
import sampleAd from "../assets/images/sample-ad.jpeg";
import Image from "react-bootstrap/Image";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image src={sampleAd} alt="teaser" fluid className="sidebar__image" />
    </div>
  );
};

export default Sidebar;
