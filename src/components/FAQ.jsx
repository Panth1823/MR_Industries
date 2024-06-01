import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  
  const faqData = [
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
    "Lorem ipsum dolor sit amet consectetur?",
  ];

  const faqAnswers = [
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
    "Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed imperdiet in diam felis quis ultrices lacinia proin pellentesque. Vivamus est ispre oilfg hynm Lorem ipsum",
  ];

  return (
    <div className="s-faq">
      <div className="s-about-us-heading">
        <span>FAQ</span>
        <p>Frequently Asked Questions</p>
      </div>
      <div className="s-faq-container">
        {faqData
          .slice(0, showAll ? faqData.length : 4)
          .map((question, index) => (
            <div
              key={index}
              className={`s-faq-set ${
                activeIndex === index ? "s-active-faq" : ""
              }`}
            >
              <div
                className="s-faq-set-heading"
                onClick={() => handleToggle(index)}
              >
                <p>{question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21.01 16.6342C21.5 16.1442 21.5 15.3542 21.01 14.8642L12.7 6.55417C12.31 6.16417 11.68 6.16417 11.29 6.55417L2.98005 14.8642C2.49005 15.3542 2.49005 16.1442 2.98005 16.6342C3.47005 17.1242 4.26005 17.1242 4.75005 16.6342L12 9.39417L19.25 16.6442C19.73 17.1242 20.5301 17.1242 21.01 16.6342Z"
                    fill="#0D3579"
                  />
                </svg>
              </div>
              <p className="s-faq-set-ans">{faqAnswers[index]}</p>
            </div>
          ))}
        {!showAll && (
          <div className="s-faq-view-all" onClick={handleViewAll}>
            <p>View all</p>
          </div>
        )}
        {showAll && (
          <div className="s-faq-see-less" onClick={handleSeeLess}>
            <p>See Less</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
