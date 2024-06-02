import React from "react";
import needHelp from "../assets/needHelp.png";

function HomeNeedHelp() {
  return (
    <div className="s-need-help">
      <div className="s-about-us-heading">
        <span>NEED HELP ?</span>
        <p>Let us know how can we help</p>
      </div>
      <form className="s-need-help-form">
        <input
          name="question"
          type="text"
          placeholder="What are you looking for?"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <img src={needHelp}></img>
    </div>
  );
}

export default HomeNeedHelp;