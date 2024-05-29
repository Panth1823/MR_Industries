import React, { useState } from "react";

const MainNavbar = ({ activeLink, onLinkClick }) => {
  const links = ["Home", "Services", "About Us"];

   const [contactText, setContactText] = useState("Contact Now");

   const handleContactClick = () => {
     if (contactText === "Contact Now") {
       onLinkClick("Contact Now");
       setContactText("Get Started");
     } else if (contactText === "Get Started") {
       onLinkClick("Home");
       setContactText("Contact Now");
     }
   };

  const getIndicatorPosition = () => {
    switch (activeLink) {
      case "Home":
        return -104;
      case "Services":
        return 0;
      case "About Us":
        return 104;
      default:
        return -104;
    }
  };

  return (
    <div className="navbar">
      <div className="navbarLogoContainer" onClick={() => onLinkClick("Home")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="92"
          height="52"
          viewBox="0 0 92 52"
          fill="none"
        >
          <path
            d="M53.7529 13.2613V12.1288H71.2956C73.5084 12.0768 75.2059 13.4411 76.2115 14.7062C77.1377 15.8714 77.4288 17.4068 77.3019 18.8899C77.2893 19.0364 77.2717 19.1754 77.2476 19.3011C76.4848 21.6207 75.2909 22.864 69.1028 24.7748C72.479 25.2897 74.0451 25.9685 75.2114 29.1159C76.2611 33.9095 77.0134 35.9963 79.2838 36.2882H81.32V37.7982H72.3921C71.9506 37.3825 71.6107 36.8155 71.2547 35.8224C70.2203 32.9367 70.617 29.5506 69.0375 26.9233C68.4333 25.9183 67.5192 25.5056 66.1268 25.341H63.1508V25.4053V34.4008C63.29 35.8648 63.6158 36.3074 64.7171 36.2882H67.0666V37.7982H54.0662V36.2882H55.1892C56.0053 36.2882 57.0481 36.4246 57.451 35.715C57.5943 35.4624 57.6572 35.1052 57.6687 34.5895V14.5825C57.6622 13.64 57.4748 13.3275 56.7289 13.2613H53.7529Z"
            fill="#0D3579"
            stroke="#0F3280"
          />
          <path
            d="M62.8076 24.0182V24.5182H63.3076H66.4402H66.4839L66.5268 24.5107C68.023 24.2476 69.1063 23.8602 69.888 23.1172C70.6709 22.373 71.0812 21.3387 71.3933 19.956C71.4559 19.6789 71.4825 19.3963 71.4825 19.12V18.0788C71.4825 17.5811 71.3938 17.0841 71.2153 16.6255C70.829 15.6332 70.4587 14.7686 69.7426 14.1574C69.0131 13.5348 68.0007 13.2324 66.471 13.1382L66.4556 13.1372H66.4402H63.3076H62.8076V13.6372V24.0182Z"
            fill="white"
            stroke="#0D3579"
          />
          <path
            d="M24.9332 37.6081H15.2221V36.6644H16.4751C18.2269 36.4237 18.9084 35.9871 19.1378 34.2107V15.1474C18.7744 14.161 18.4015 13.6619 16.7884 13.0712H15.0654V12.1274H24.4633L34.0178 29.3033L41.6928 12.1274H51.8738V13.2599C48.6367 13.0344 47.8876 13.7813 47.958 16.2798V33.8332C48.0937 36.041 49.0347 36.5503 51.8738 36.4756V37.6081H38.8734V36.6644C41.5158 36.7777 42.0472 35.9884 42.1627 33.8332V16.2798L32.7648 37.4194H32.1382L21.0174 17.2236V34.2107C21.3036 36.4052 22.3017 36.8026 24.9332 36.6644V37.6081Z"
            fill="#0D3579"
            stroke="#0F3280"
          />
          <path
            d="M14.752 3.2562C32.2948 -3.34991 44.0421 6.65361 44.0421 6.65361C44.0421 6.65361 29.4754 -0.707466 15.6918 6.65361C12.4898 8.36365 11.7761 8.54107 8.33016 12.316C-0.284561 22.3195 8.33016 31.3793 9.73984 32.7005C9.73984 32.7005 -2.63406 25.7169 2.06494 14.2034C5.39673 8.59907 8.06275 6.11072 14.752 3.2562Z"
            fill="#C01214"
            stroke="#C01214"
          />
          <path
            d="M77.248 48.7438C59.7052 55.3499 47.9579 45.3464 47.9579 45.3464C47.9579 45.3464 62.5246 52.7075 76.3082 45.3464C79.5102 43.6364 80.2239 43.4589 83.6698 39.684C92.2846 29.6805 83.6698 20.6207 82.2602 19.2995C82.2602 19.2995 94.6341 26.2831 89.9351 37.7966C86.6033 43.4009 83.9373 45.8893 77.248 48.7438Z"
            fill="#C01214"
            stroke="#C01214"
          />
        </svg>
        <p className={activeLink === "Home" ? "hidden" : ""}>M R INDUSTRIES</p>
      </div>
      <div className="navbarMain">
        {links.map((link) => (
          <div
            key={link}
            className={`navbarMainLink ${
              activeLink === link ? "activeNavbarLink" : ""
            }`}
            onClick={() => onLinkClick(link)}
          >
            <p>{link}</p>
          </div>
        ))}

        <div
          className={`navbarLinkIndicator ${
            activeLink === "Contact Now" ? "hidden" : ""
          }`}
          style={{ transform: `translateX(${getIndicatorPosition()}px)` }}
        ></div>
      </div>
      <div className="navbarContactUs" onClick={handleContactClick}>
        <p>{contactText}</p>
      </div>
    </div>
  );
};

export default MainNavbar;
