import React from "react";
import HomeBanner from "./HomeBanner.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import ProductGallery from "./Productgallery.jsx";
import HomeOurServices from "./HomeOurServices.jsx";
import HomeProcess from "./HomeProcess.jsx";
import Testimony from "./Testimony.jsx";
import FAQ from "./FAQ.jsx";
import HomeNeedHelp from "./HomeNeedHelp.jsx";

const Homepage = ({ onLinkClick }) => {
  return (
    <div>
      <HomeBanner onLinkClick={onLinkClick} />
      <HomeAboutUs onLinkClick={onLinkClick} />
      <ProductGallery />
      <HomeOurServices onLinkClick={onLinkClick} />
      <HomeProcess />
      <Testimony />
      <FAQ />
      <HomeNeedHelp />
    </div>
  );
};

export default Homepage;
