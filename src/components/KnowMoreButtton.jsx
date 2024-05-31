import React from "react";

const KnowMoreButton = ({ KnowMoreText, onClick }) => {
  return (
    <div className="KnowMoreButton" onClick={onClick}>
      <p>{KnowMoreText}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.00047 7C6.00047 7.55 6.45047 8 7.00047 8H14.5905L5.71047 16.88C5.32047 17.27 5.32047 17.9 5.71047 18.29C6.10047 18.68 6.73047 18.68 7.12047 18.29L16.0005 9.41V17C16.0005 17.55 16.4505 18 17.0005 18C17.5505 18 18.0005 17.55 18.0005 17V7C18.0005 6.45 17.5505 6 17.0005 6H7.00047C6.45047 6 6.00047 6.45 6.00047 7Z"
          fill="#5770AC"
        />
      </svg>
    </div>
  );
};

export default KnowMoreButton;
