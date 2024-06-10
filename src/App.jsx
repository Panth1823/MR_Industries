import React, { useState } from "react";
import MainNavbar from "./components/MainNavbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Services from "./components/Services.jsx";
import ContactForm from "./components/Contact.jsx";
import Footerend from "./components/Footerend.jsx";
import About from "./components/About.jsx";
import TandC from "./components/T&C.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";

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
        {activeLink === "Services" && (
          <Services onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services1" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services2" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services3" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services4" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services5" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "Services6" && (
          <ServiceDetails onLinkClick={handleLinkClick} />
        )}
        {activeLink === "About Us" && <About onLinkClick={handleLinkClick} />}
        {activeLink === "Contact Now" && <ContactForm></ContactForm>}
        {activeLink === "TandC" && <TandC/>}
        {activeLink === "Privacy Policy" && <p>Privacy Policy</p>}
      </div>
      <Footerend onLinkClick={handleLinkClick} />
    </>
  );
};

export default App;
