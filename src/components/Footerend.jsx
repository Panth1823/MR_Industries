import React from "react";

const Footerend = ({ onLinkClick }) => {
  const scrollToTestimony = () => {
    const scrollPosition = window.scrollY;
    onLinkClick("Home");

    setTimeout(() => {
      window.scrollTo({ bottom: scrollPosition });
      setTimeout(() => {
        const testimonyDiv = document.getElementById("testimony");
        if (testimonyDiv) {
          testimonyDiv.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }, 0);
  };

  return (
    <footer>
      <div className="FooterMain">
        <div className="FooterMainRight">
          <a onClick={() => onLinkClick("Home")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="161"
              height="82"
              viewBox="0 0 161 82"
              fill="none"
            >
              <path
                d="M94.2827 20.6181V18.8062H125.47C130.018 18.71 133.341 21.6425 134.955 23.857C135.928 25.1924 136.196 26.877 136.194 28.5295C136.193 29.1505 136.157 29.7817 136.051 30.2819C134.695 33.9932 132.572 35.9824 121.571 39.0397C126.622 39.733 129.394 40.612 131.382 43.8744C132.199 45.2157 132.608 46.7574 133.009 48.2758C134.61 54.3295 136.062 57.0435 139.671 57.4612H143.291V59.8772H127.419C126.327 58.9515 125.584 57.5567 124.627 54.508C123.614 51.2773 123.397 47.8355 122.411 44.5963C121.437 41.3935 119.643 40.3034 116.281 39.9457H110.99V40.0485V54.4413C111.238 56.7837 111.817 57.4918 113.775 57.4612H117.951V59.8772H94.8396V57.4612H97.9111C98.6469 57.4612 99.4084 57.4742 100.083 57.1806C100.908 56.8217 101.209 56.152 101.244 54.7433V22.7321C101.233 21.2241 100.899 20.724 99.5734 20.6181H94.2827Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M110.769 37.8293V38.3293H111.269H116.838H116.877L116.916 38.3232C119.547 37.9069 121.375 37.3045 122.68 36.1877C123.995 35.063 124.709 33.4782 125.262 31.2753C125.368 30.8526 125.413 30.4189 125.413 29.9922V28.3263C125.413 27.5581 125.261 26.794 124.958 26.0927C124.266 24.4938 123.632 23.182 122.436 22.264C121.236 21.3422 119.546 20.8691 116.866 20.7205L116.852 20.7197H116.838H111.269H110.769V21.2197V37.8293Z"
                fill="#295498"
                stroke="white"
              />
              <path
                d="M43.0486 59.573H25.7843V58.063H28.012C31.1263 57.678 32.3378 56.9793 32.7457 54.1371V23.6358C32.0996 22.0576 31.4367 21.2591 28.5689 20.3139H25.5059V18.804H42.2132L59.199 46.2853L72.8433 18.804H90.943V20.6159C85.1881 20.2551 83.8563 21.4502 83.9816 25.4478V53.5331C84.2228 57.0656 85.8957 57.8805 90.943 57.7611V59.573H67.8311V58.063C72.5287 58.2444 73.4735 56.9815 73.6787 53.5331V25.4478L56.9714 59.271H55.8575L36.0872 26.9578V54.1371C36.5959 57.6484 38.3704 58.2842 43.0486 58.063V59.573Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M24.9481 4.60991C56.1351 -5.95985 77.0193 10.0458 77.0193 10.0458C77.0193 10.0458 51.1229 -1.73195 26.6188 10.0458C20.9263 12.7818 19.6574 13.0657 13.5314 19.1056C-1.78366 35.1112 13.5314 49.6069 16.0375 51.7208C16.0375 51.7208 -5.96054 40.5471 2.39323 22.1255C8.31642 13.1585 13.056 9.17716 24.9481 4.60991Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M136.052 77.3901C104.865 87.9598 83.9807 71.9542 83.9807 71.9542C83.9807 71.9542 109.877 83.7319 134.381 71.9542C140.074 69.2182 141.343 68.9343 147.469 62.8944C162.784 46.8888 147.469 32.3931 144.963 30.2792C144.963 30.2792 166.961 41.4529 158.607 59.8745C152.684 68.8415 147.944 72.8228 136.052 77.3901Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </a>
          <span>M R INDUSTRIES </span>
          <div className="FooterMainLinks">
            <a href="tel:+919901451802" className="FooterMainLinksSet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M19.73 15.2599L17.19 14.9699C16.58 14.8999 15.98 15.1099 15.55 15.5399L13.71 17.3799C10.88 15.9399 8.56004 13.6299 7.12004 10.7899L8.97004 8.93989C9.40004 8.50989 9.61004 7.90989 9.54004 7.29989L9.25004 4.77989C9.13004 3.76989 8.28004 3.00989 7.26004 3.00989H5.53004C4.40004 3.00989 3.46004 3.94989 3.53004 5.07989C4.06004 13.6199 10.89 20.4399 19.42 20.9699C20.55 21.0399 21.49 20.0999 21.49 18.9699V17.2399C21.5 16.2299 20.74 15.3799 19.73 15.2599Z"
                  fill="#D3DDF8"
                />
              </svg>
              <p>+91 99014 51802</p>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@mrindustries.in.net"
              target="_blank"
              className="FooterMainLinksSet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M20.5 4H4.5C3.4 4 2.5 4.9 2.5 6V18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.1 8.25L13.56 12.34C12.91 12.75 12.09 12.75 11.44 12.34L4.9 8.25C4.65 8.09 4.5 7.82 4.5 7.53C4.5 6.86 5.23 6.46 5.8 6.81L12.5 11L19.2 6.81C19.77 6.46 20.5 6.86 20.5 7.53C20.5 7.82 20.35 8.09 20.1 8.25Z"
                  fill="#D3DDF8"
                />
              </svg>
              <p>sales@mrindustries.in.net</p>
            </a>
            <a
              href="https://maps.app.goo.gl/xoQPbuDDNBRRSQft8"
              target="_blank"
              className="FooterMainLinksSet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.5 2C8.3 2 4.5 5.22 4.5 10.2C4.5 13.38 6.95 17.12 11.84 21.43C12.22 21.76 12.79 21.76 13.17 21.43C18.05 17.12 20.5 13.38 20.5 10.2C20.5 5.22 16.7 2 12.5 2ZM12.5 12C11.4 12 10.5 11.1 10.5 10C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 11.1 13.6 12 12.5 12Z"
                  fill="#D3DDF8"
                />
              </svg>
              <p>
                Overhead Tank, Ground Floor & 1st Floor Shed NO. R-44, KSSIDC{" "}
                <br></br>
                Industrial Estate 4th Main, 2nd Stage, Jigani, Taluk, Industrial
                <br></br>
                Area, Anekal, Bengaluru, Karnataka - 560105
              </p>
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/xoQPbuDDNBRRSQft8"
            target="_blank"
            className="FooterMainMapLink"
          >
            <p>View on Google Maps</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M6.50047 7C6.50047 7.55 6.95047 8 7.50047 8H15.0905L6.21047 16.88C5.82047 17.27 5.82047 17.9 6.21047 18.29C6.60047 18.68 7.23047 18.68 7.62047 18.29L16.5005 9.41V17C16.5005 17.55 16.9505 18 17.5005 18C18.0505 18 18.5005 17.55 18.5005 17V7C18.5005 6.45 18.0505 6 17.5005 6H7.50047C6.95047 6 6.50047 6.45 6.50047 7Z"
                fill="#D3DDF8"
              />
            </svg>
          </a>
        </div>
        <div className="FooterMainLeft">
          <a onClick={() => onLinkClick("Home")}>Home</a>
          <a onClick={() => onLinkClick("About Us")}>About Us</a>
          <a onClick={() => onLinkClick("Services")}>Services</a>
          <a onClick={() => onLinkClick("Contact Now")}>Contact Us</a>
          <a onClick={() => scrollToTestimony()}>Testimonial</a>
          <a onClick={() => onLinkClick("TandC")}>Terms & Conditions</a>
          <a onClick={() => onLinkClick("Privacy Policy")}>Privacy Policy</a>
        </div>
      </div>
      <div className="FooterEnd">
        <p>Copyrights 2024 . All Rights Reserved</p>
        <p>
          Crafted by{" "}
          <a href="https://koiosengg.com/" target="_blank">
            Koios Engineering Solutions
          </a>
        </p>
      </div>
      <div className="mobile-footer">
        <div
          onClick={() => onLinkClick("Home")}
          className="mobile-footer-heading"
        >
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="161"
              height="82"
              viewBox="0 0 161 82"
              fill="none"
            >
              <path
                d="M94.2827 20.6181V18.8062H125.47C130.018 18.71 133.341 21.6425 134.955 23.857C135.928 25.1924 136.196 26.877 136.194 28.5295C136.193 29.1505 136.157 29.7817 136.051 30.2819C134.695 33.9932 132.572 35.9824 121.571 39.0397C126.622 39.733 129.394 40.612 131.382 43.8744C132.199 45.2157 132.608 46.7574 133.009 48.2758C134.61 54.3295 136.062 57.0435 139.671 57.4612H143.291V59.8772H127.419C126.327 58.9515 125.584 57.5567 124.627 54.508C123.614 51.2773 123.397 47.8355 122.411 44.5963C121.437 41.3935 119.643 40.3034 116.281 39.9457H110.99V40.0485V54.4413C111.238 56.7837 111.817 57.4918 113.775 57.4612H117.951V59.8772H94.8396V57.4612H97.9111C98.6469 57.4612 99.4084 57.4742 100.083 57.1806C100.908 56.8217 101.209 56.152 101.244 54.7433V22.7321C101.233 21.2241 100.899 20.724 99.5734 20.6181H94.2827Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M110.769 37.8293V38.3293H111.269H116.838H116.877L116.916 38.3232C119.547 37.9069 121.375 37.3045 122.68 36.1877C123.995 35.063 124.709 33.4782 125.262 31.2753C125.368 30.8526 125.413 30.4189 125.413 29.9922V28.3263C125.413 27.5581 125.261 26.794 124.958 26.0927C124.266 24.4938 123.632 23.182 122.436 22.264C121.236 21.3422 119.546 20.8691 116.866 20.7205L116.852 20.7197H116.838H111.269H110.769V21.2197V37.8293Z"
                fill="#295498"
                stroke="white"
              />
              <path
                d="M43.0486 59.573H25.7843V58.063H28.012C31.1263 57.678 32.3378 56.9793 32.7457 54.1371V23.6358C32.0996 22.0576 31.4367 21.2591 28.5689 20.3139H25.5059V18.804H42.2132L59.199 46.2853L72.8433 18.804H90.943V20.6159C85.1881 20.2551 83.8563 21.4502 83.9816 25.4478V53.5331C84.2228 57.0656 85.8957 57.8805 90.943 57.7611V59.573H67.8311V58.063C72.5287 58.2444 73.4735 56.9815 73.6787 53.5331V25.4478L56.9714 59.271H55.8575L36.0872 26.9578V54.1371C36.5959 57.6484 38.3704 58.2842 43.0486 58.063V59.573Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M24.9481 4.60991C56.1351 -5.95985 77.0193 10.0458 77.0193 10.0458C77.0193 10.0458 51.1229 -1.73195 26.6188 10.0458C20.9263 12.7818 19.6574 13.0657 13.5314 19.1056C-1.78366 35.1112 13.5314 49.6069 16.0375 51.7208C16.0375 51.7208 -5.96054 40.5471 2.39323 22.1255C8.31642 13.1585 13.056 9.17716 24.9481 4.60991Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M136.052 77.3901C104.865 87.9598 83.9807 71.9542 83.9807 71.9542C83.9807 71.9542 109.877 83.7319 134.381 71.9542C140.074 69.2182 141.343 68.9343 147.469 62.8944C162.784 46.8888 147.469 32.3931 144.963 30.2792C144.963 30.2792 166.961 41.4529 158.607 59.8745C152.684 68.8415 147.944 72.8228 136.052 77.3901Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </a>
          <p>M R INDUSTRIES </p>
        </div>
        <div className="mobile-footer-container">
          <div className="mobile-footer-main">
            <div className="mobile-footer-links">
              <a onClick={() => onLinkClick("Home")}>Home</a>
              <a onClick={() => onLinkClick("About Us")}>About Us</a>
              <a onClick={() => onLinkClick("Services")}>Services</a>
              <a onClick={() => onLinkClick("Contact Now")}>Contact Us</a>
              <a onClick={() => scrollToTestimony()}>Testimonial</a>
              <a onClick={() => onLinkClick("TandC")}>Terms & Conditions</a>
              <a onClick={() => onLinkClick("Privacy Policy")}>
                Privacy Policy
              </a>
            </div>
            <div className="mobile-footer-conatct">
              <p>Contact us</p>
              <div className="mobile-footer-contact-link">
                <a href="tel:+919901451802">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M16.025 13.431L13.9083 13.1893C13.4 13.131 12.9 13.306 12.5416 13.6643L11.0083 15.1977C8.64997 13.9977 6.71664 12.0727 5.51664 9.70599L7.05831 8.16432C7.41664 7.80599 7.59164 7.30599 7.53331 6.79766L7.29164 4.69766C7.19164 3.85599 6.48331 3.22266 5.63331 3.22266H4.19164C3.24997 3.22266 2.46664 4.00599 2.52497 4.94766C2.96664 12.0643 8.65831 17.7477 15.7666 18.1893C16.7083 18.2477 17.4916 17.4643 17.4916 16.5227V15.081C17.5 14.2393 16.8666 13.531 16.025 13.431Z"
                      fill="#D3DDF8"
                    />
                  </svg>
                  <p>+91 99014 51802</p>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@mrindustries.in.net"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M16.6665 4.04785H3.33317C2.4165 4.04785 1.6665 4.79785 1.6665 5.71452V15.7145C1.6665 16.6312 2.4165 17.3812 3.33317 17.3812H16.6665C17.5832 17.3812 18.3332 16.6312 18.3332 15.7145V5.71452C18.3332 4.79785 17.5832 4.04785 16.6665 4.04785ZM16.3332 7.58952L10.8832 10.9979C10.3415 11.3395 9.65817 11.3395 9.1165 10.9979L3.6665 7.58952C3.45817 7.45618 3.33317 7.23118 3.33317 6.98952C3.33317 6.43119 3.9415 6.09785 4.4165 6.38952L9.99984 9.88118L15.5832 6.38952C16.0582 6.09785 16.6665 6.43119 16.6665 6.98952C16.6665 7.23118 16.5415 7.45618 16.3332 7.58952Z"
                      fill="#D3DDF8"
                    />
                  </svg>
                  <p>sales@mrindustries.in.net</p>
                </a>
                <a
                  href="https://maps.app.goo.gl/xoQPbuDDNBRRSQft8"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="35"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.5 2C8.3 2 4.5 5.22 4.5 10.2C4.5 13.38 6.95 17.12 11.84 21.43C12.22 21.76 12.79 21.76 13.17 21.43C18.05 17.12 20.5 13.38 20.5 10.2C20.5 5.22 16.7 2 12.5 2ZM12.5 12C11.4 12 10.5 11.1 10.5 10C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 11.1 13.6 12 12.5 12Z"
                      fill="#D3DDF8"
                    />
                  </svg>
                  <p>
                    Overhead Tank, Ground Floor & 1st Floor Shed NO. R-44,
                    KSSIDC Industrial Estate 4th Main, 2nd Stage, Jigani, Taluk,
                    Industrial Area, Anekal, Bengaluru, Karnataka - 560105
                  </p>
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/xoQPbuDDNBRRSQft8"
                target="_blank"
                style={{ paddingLeft: "28px" }}
              >
                <p>View on Google Maps</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M5.00049 6.54769C5.00049 7.00602 5.37549 7.38102 5.83383 7.38102H12.1588L4.75883 14.781C4.43383 15.106 4.43383 15.631 4.75883 15.956C5.08383 16.281 5.60883 16.281 5.93383 15.956L13.3338 8.55602V14.881C13.3338 15.3394 13.7088 15.7144 14.1672 15.7144C14.6255 15.7144 15.0005 15.3394 15.0005 14.881V6.54769C15.0005 6.08936 14.6255 5.71436 14.1672 5.71436H5.83383C5.37549 5.71436 5.00049 6.08936 5.00049 6.54769Z"
                    fill="#D3DDF8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-footer-end">
          <div className="mobile-footer-end-line"></div>
          <div className="mobile-footer-end-text">
            <p>© 2024 M R Industries. All rights reserved.</p>
            <p>
              Crafted by{" "}
              <a
                href="https://www.koiosengg.com"
                style={{ textDecoration: "none", color: "#FFF" }}
                target="_blank"
              >
                Koios Engineering Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerend;
