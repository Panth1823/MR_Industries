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
    "What types of wiring harnesses do you produce?",
    "Can you provide custom EV battery cables?",
    "What makes your power cords superior?",
    "How long have you been in the manufacturing industry?",
    "Do you offer solutions for industrial electronics?",
    "What industries do you serve?",
    "Are your products compliant with industry standards?",
    "How do you ensure the quality of your electrical supplies?",
  ];

  const faqAnswers = [
    "We manufacture a wide range of wiring harnesses, including automotive, industrial, and custom solutions. Our harnesses are designed for durability and performance, meeting the highest industry standards.",
    "Yes, we specialize in producing custom EV battery cables tailored to your specifications. Our cables ensure optimal conductivity and safety, adhering to all regulatory requirements.",
    "Our power cords are crafted from top-quality materials and undergo rigorous testing. They offer excellent durability and reliability, making them ideal for both commercial and industrial applications.",
    "With over 14 years of experience, we have established ourselves as leaders in wiring harnesses, EV battery cables, and power cords. Our expertise ensures we deliver only the best products.",
    "Absolutely, we are your trusted source for all industrial electronics needs. Our products range from connectors and sensors to complete electronic systems, designed for efficiency and reliability.",
    "We serve a diverse range of industries including automotive, aerospace, telecommunications, and industrial automation. Our products are engineered to meet the specific demands of each sector.",
    "Yes, all our products comply with relevant industry standards and certifications. We ensure our wiring harnesses, EV battery cables, and power cords meet or exceed regulatory requirements.",
    "Quality is our top priority. We are certified manufacturers, employing stringent quality control measures and using advanced testing equipment to ensure our electrical supplies meet the highest standards of performance and safety.",
  ];

  return (
    <div className="s-faq">
      <div className="s-about-us-heading">
        <span>SOME COMMON FAQ</span>
        <p>Frequently Asked Questions</p>
      </div>
      <div className="s-faq-container">
        {faqData
          .slice(0, showAll ? faqData.length : 4)
          .map((question, index) => (
            <div
              onClick={() => handleToggle(index)}
              key={index}
              className={`s-faq-set ${
                activeIndex === index ? "s-active-faq" : ""
              }`}
            >
              <div className="s-faq-set-heading">
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
