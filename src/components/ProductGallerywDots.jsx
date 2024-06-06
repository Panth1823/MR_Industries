import React, { useState, useEffect } from "react";
import productImg from "../assets/productImg.png";

const ProductGallerywDots = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenSizeCurrent = window.innerWidth;
      setItemsToShow(screenSizeCurrent < 1200 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { img: productImg },
    { img: productImg },
    { img: productImg },
    { img: productImg },
    { img: productImg },
    { img: productImg },
  ];

  useEffect(() => {
    setIsLeftDisabled(startIndex === 0);
    setIsRightDisabled(startIndex + itemsToShow >= items.length);
  }, [startIndex, itemsToShow, items.length]);

  const totalSets = Math.ceil(items.length / itemsToShow);
  const currentSet = Math.floor(startIndex / itemsToShow);

  const handleRightClick = () => {
    if (startIndex + itemsToShow < items.length) {
      setStartIndex(startIndex + itemsToShow);
    }
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsToShow);
    }
  };

  const handleDotClick = (index) => {
    setStartIndex(index * itemsToShow);
  };

  return (
    <div className="p-product-gallery">
      <p
        className="p-product-gallery-heading"
        style={{
          width: "100%",
          borderBottom: "1px solid #E2E2E2",
          paddingBottom: "24px",
        }}
      >
        Manufactured Products
      </p>
      <div className="p-product-gallery-container">
        <div
          className={`p-product-gallery-left-button ${
            isLeftDisabled ? "disabled" : ""
          }`}
          onClick={handleLeftClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <path
              d="M42.8279 44.9055C43.6729 44.0605 43.6729 42.6955 42.8279 41.8505L34.4213 33.4438L42.8279 25.0372C43.6729 24.1922 43.6729 22.8272 42.8279 21.9822C41.9829 21.1372 40.6179 21.1372 39.7729 21.9822L29.8279 31.9272C28.9829 32.7722 28.9829 34.1372 29.8279 34.9822L39.7729 44.9272C40.5963 45.7505 41.9829 45.7505 42.8279 44.9055Z"
              fill="#12307B"
            />
          </svg>
        </div>
        <div className="p-gallery-set-container">
          {items
            .slice(startIndex, startIndex + itemsToShow)
            .map((item, index) => (
              <div className="p-gallery-set" key={index}>
                <img src={item.img} alt={`Product ${index + 1}`} />
                <p>{item.text}</p>
              </div>
            ))}
        </div>
        <div
          className={`p-product-gallery-right-button ${
            isRightDisabled ? "disabled" : ""
          }`}
          onClick={handleRightClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <path
              d="M31.1721 44.9055C30.3271 44.0605 30.3271 42.6955 31.1721 41.8505L39.5787 33.4438L31.1721 25.0372C30.3271 24.1922 30.3271 22.8272 31.1721 21.9822C32.0171 21.1372 33.3821 21.1372 34.2271 21.9822L44.1721 31.9272C45.0171 32.7722 45.0171 34.1372 44.1721 34.9822L34.2271 44.9272C33.4037 45.7505 32.0171 45.7505 31.1721 44.9055Z"
              fill="#12307B"
            />
          </svg>
        </div>
      </div>
      <div className="p-gallery-dots">
        {Array.from({ length: totalSets }).map((_, index) => (
          <span
            key={index}
            className={`p-gallery-dot ${index === currentSet ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallerywDots;
