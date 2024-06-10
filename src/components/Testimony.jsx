import React from "react";
import testimony1 from "../assets/testimony1.jpg";
import testimony2 from "../assets/testimony2.jpg";
import testimony3 from "../assets/testimony3.jpg";

function Testimony() {
  return (
    <div className="s-testimony" id="testimony">
      <div className="s-about-us-heading">
        <span>TESTIMONIALS</span>
        <p>Trust Their Experience</p>
      </div>
      <div className="s-testimony-set-container">
        <div className="s-testimony-set">
          <img src={testimony1}></img>
          <div className="s-testimony-content">
            <span>Rajesh R</span>
            <p>
              MR Industries consistently delivers top-quality wiring harnesses
              and EV battery cables.
            </p>
          </div>
        </div>
        <div className="s-testimony-set">
          <img src={testimony2}></img>
          <div className="s-testimony-content">
            <span>Anil S.</span>
            <p>
              Their power cords and industrial electronics always meet our high
              standards.
            </p>
          </div>
        </div>
        <div className="s-testimony-set">
          <img src={testimony3}></img>
          <div className="s-testimony-content">
            <span>Vijay P.</span>
            <p>
              Reliable service and excellent electrical materials every time,
              without fail.
            </p>
          </div>
        </div>
      </div>
      <div className="s-mobile-testimony-set-container">
        <div className="s-mobile-testimony-set">
          <img src={testimony1}></img>
          <div className="content">
            <span>Rajesh R</span>
            <p>
              MR Industries consistently delivers top-quality wiring harnesses
              and EV battery cables.
            </p>
          </div>
        </div>
        <div className="s-mobile-testimony-set">
          <img src={testimony2}></img>
          <div className="content">
            <span>Anil S.</span>
            <p>
              Their power cords and industrial electronics always meet our high
              standards.
            </p>
          </div>
        </div>
        <div className="s-mobile-testimony-set">
          <img src={testimony3}></img>
          <div className="content">
            <span>Vijay P.</span>
            <p>
              Reliable service and excellent electrical materials every time,
              without fail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
