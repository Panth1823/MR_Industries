import React from 'react'
import testimony from "../assets/testimony.jpg";

function Testimony() {
  return (
    <div className="s-testimony">
      <div className="s-about-us-heading">
        <span>TESTIMONIALS</span>
        <p>Trust Their Experience</p>
      </div>
      <div className="s-testimony-set-container">
        <div className="s-testimony-set">
          <img src={testimony}></img>
          <div className="s-testimony-content">
            <span>Rajesh R</span>
            <p>
              MR Industries consistently delivers top-quality wiring harnesses
              and EV battery cables.
            </p>
          </div>
        </div>
        <div className="s-testimony-set">
          <img src={testimony}></img>
          <div className="s-testimony-content">
            <span>Anil S.</span>
            <p>
              Their power cords and industrial electronics always meet our high
              standards.
            </p>
          </div>
        </div>
        <div className="s-testimony-set">
          <img src={testimony}></img>
          <div className="s-testimony-content">
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

export default Testimony
