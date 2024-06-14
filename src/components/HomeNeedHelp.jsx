import React from "react";
import needHelp from "../assets/needHelp.png";

function HomeNeedHelp() {
  return (
    <div className="s-need-help">
      <div className="s-about-us-heading">
        <span>NEED HELP ?</span>
        <p>Can't Find It? Email Us!</p>
      </div>
      <form
        className="s-need-help-form"
        action="https://formspree.io/f/xayrrpqo"
        method="post"
      >
        <input
          name="question"
          type="text"
          placeholder="What are you looking for?"
          required
        />
        <button type="submit">
          <p> Submit </p>
        </button>
      </form>
      <img src={needHelp}></img>
    </div>
  );
}

export default HomeNeedHelp;
