import React, { useState } from "react";
import MainNavbar from "./components/MainNavbar.jsx";
import Homepage from "./components/Homepage.jsx";
import ContactForm from "./components/Conatct.jsx";
import Footerend from "./components/Footerend.jsx";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MainNavbar activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="bodyMain">
        {activeLink === "Home" && <Homepage onLinkClick={handleLinkClick} />}
        {activeLink === "Services" && <p>Our Services</p>}
        {activeLink === "About Us" && <p>About Us</p>}
        {activeLink === "Contact Now" && <ContactForm></ContactForm>}
        {activeLink === "Terms & Conditions" && <p>Terms & Conditions</p>}
        {activeLink === "Privacy Policy" && <p>Privacy Policy</p>}
      </div>
      <Footerend onLinkClick={handleLinkClick} />
    </>
  );
};

export default App;
