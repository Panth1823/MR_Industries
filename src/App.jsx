import React, { useState } from "react";
import MainNavbar from "./components/MainNavbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Services from "./components/Services.jsx";
import ContactForm from "./components/Contact.jsx";
import Footerend from "./components/Footerend.jsx";
import About from "./components/About.jsx";

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
        {activeLink === "Services1" && <p>Services1</p>}
        {activeLink === "Services2" && <p>Services2</p>}
        {activeLink === "Services3" && <p>Services3</p>}
        {activeLink === "Services4" && <p>Services4</p>}
        {activeLink === "Services5" && <p>Services5</p>}
        {activeLink === "Services6" && <p>Services6</p>}
        {activeLink === "About Us" && <About onLinkClick={handleLinkClick} />}
        {activeLink === "Contact Now" && <ContactForm></ContactForm>}
        {activeLink === "Terms & Conditions" && <p>Terms & Conditions</p>}
        {activeLink === "Privacy Policy" && <p>Privacy Policy</p>}
      </div>
      <Footerend onLinkClick={handleLinkClick} />
    </>
  );
};

export default App;
