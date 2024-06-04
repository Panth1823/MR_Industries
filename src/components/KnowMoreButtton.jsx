import React from "react";

const KnowMoreButton = ({ KnowMoreText, onClick }) => {
  return (
    <div className="KnowMoreButton" onClick={onClick}>
      <p>{KnowMoreText}</p>
    </div>
  );
};

export default KnowMoreButton;
