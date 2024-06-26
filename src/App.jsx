import React, { useState } from "react";
import MainNavbar from "./components/MainNavbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Services from "./components/Services.jsx";
import ContactForm from "./components/Contact.jsx";
import Footerend from "./components/Footerend.jsx";
import About from "./components/About.jsx";
import TandC from "./components/T&C.jsx";
import EVHarness from "./components/EVHarness.jsx";
import HVHarness from "./components/HVHarness.jsx";
import LVHarness from "./components/LVHarness.jsx";
import CustomisedHarness from "./components/CustomisedHarness.jsx";
import ICEHarness from "./components/ICEHarness.jsx";
import ChargerCables from "./components/ChargerCables.jsx";

// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVN7QYbmu12JiVV6gxnLh3TgfColZHen8",
  authDomain: "mr-industries-1-0.firebaseapp.com",
  projectId: "mr-industries-1-0",
  storageBucket: "mr-industries-1-0.appspot.com",
  messagingSenderId: "349787262974",
  appId: "1:349787262974:web:ed1afbe433bf799f61baaf",
  measurementId: "G-YBDRXKF5JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        {activeLink === "EVHarness" && (
          <EVHarness onLinkClick={handleLinkClick} />
        )}
        {activeLink === "HVHarness" && (
          <HVHarness onLinkClick={handleLinkClick} />
        )}
        {activeLink === "LVHarness" && (
          <LVHarness onLinkClick={handleLinkClick} />
        )}
        {activeLink === "CustomisedHarness" && (
          <CustomisedHarness onLinkClick={handleLinkClick} />
        )}
        {activeLink === "ICEHarness" && (
          <ICEHarness onLinkClick={handleLinkClick} />
        )}
        {activeLink === "ChargerCables" && (
          <ChargerCables onLinkClick={handleLinkClick} />
        )}
        {activeLink === "About Us" && <About onLinkClick={handleLinkClick} />}
        {activeLink === "Contact Now" && <ContactForm></ContactForm>}
        {activeLink === "TandC" && <TandC />}
        {activeLink === "Privacy Policy" && <p>Privacy Policy</p>}
      </div>
      <Footerend onLinkClick={handleLinkClick} />
    </>
  );
};

export default App;
