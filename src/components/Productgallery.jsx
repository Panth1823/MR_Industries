import React, { useState } from "react";
import productImg from "../assets/productImg.png";

const ProductGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const items = [
    { img: productImg, text: "Lorem Ipsum1" },
    { img: productImg, text: "Lorem Ipsum2" },
    { img: productImg, text: "Lorem Ipsum3" },
    { img: productImg, text: "Lorem Ipsum4" },
    { img: productImg, text: "Lorem Ipsum5" },
    { img: productImg, text: "Lorem Ipsum6" },
  ];

  const numberOfItems= items.length;


  const screenSizeCurrent = window.innerWidth;
  const itemsToShow = screenSizeCurrent < 1200 ? 1 : 4;

  const endIndex = startIndex + itemsToShow;

  const handleRightClick = () => {
    if (endIndex < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="s-product-gallery">
      <p className="s-product-gallery-heading">Products Gallery</p>
      <div className="s-about-us-heading">
        <span>PORTFOLIO</span>
        <p>Products Gallery</p>
      </div>
      <div className="s-product-gallery-container">
        <div
          className="s-product-gallery-left-button"
          onClick={handleLeftClick}
        >
          <svg
            style={{ opacity: startIndex === 0 ? 0.3 : 1 }}
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
          >
            <path
              d="M31.8279 37.9055C32.6729 37.0605 32.6729 35.6955 31.8279 34.8505L23.4213 26.4438L31.8279 18.0372C32.6729 17.1922 32.6729 15.8272 31.8279 14.9822C30.9829 14.1372 29.6179 14.1372 28.7729 14.9822L18.8279 24.9272C17.9829 25.7722 17.9829 27.1372 18.8279 27.9822L28.7729 37.9272C29.5963 38.7505 30.9829 38.7505 31.8279 37.9055Z"
              fill="#355094"
            />
          </svg>
        </div>
        <div className="s-gallery-set-container">
          {items.slice(startIndex, endIndex).map((item, index) => (
            <div className="s-gallery-set" key={index}>
              <img src={item.img} alt={`Product ${index + 1}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div
          className="s-product-gallery-right-button"
          onClick={handleRightClick}
          style={{ opacity: endIndex >= numberOfItems ? 0.3 : 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
          >
            <path
              d="M20.1721 37.9055C19.3271 37.0605 19.3271 35.6955 20.1721 34.8505L28.5787 26.4438L20.1721 18.0372C19.3271 17.1922 19.3271 15.8272 20.1721 14.9822C21.0171 14.1372 22.3821 14.1372 23.2271 14.9822L33.1721 24.9272C34.0171 25.7722 34.0171 27.1372 33.1721 27.9822L23.2271 37.9272C22.4037 38.7505 21.0171 38.7505 20.1721 37.9055Z"
              fill="#355094"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
