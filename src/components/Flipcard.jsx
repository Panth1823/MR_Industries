import ReactCardFlip from "react-card-flip";
import "../panth.css"; // Assuming you have a CSS file named panth.css
import { useState } from "react";
import TestImg from "../assets/TestImg.png"; // Assuming you have an image named TestImg.png

const Flipcard = () => {
  const [card1Flipped, setCard1Flipped] = useState(false);
  const [card2Flipped, setCard2Flipped] = useState(false);
  const [card3Flipped, setCard3Flipped] = useState(false);
  const [card4Flipped, setCard4Flipped] = useState(false);
  const [card5Flipped, setCard5Flipped] = useState(false);
  const [card6Flipped, setCard6Flipped] = useState(false);

  function flipCard(cardIndex) {
    switch (cardIndex) {
      case 1:
        setCard1Flipped(!card1Flipped);
        break;
      case 2:
        setCard2Flipped(!card2Flipped);
        break;
      case 3:
        setCard3Flipped(!card3Flipped);
        break;
      case 4:
        setCard4Flipped(!card4Flipped);
        break;
      case 5:
        setCard5Flipped(!card5Flipped);
        break;
      case 6:
        setCard6Flipped(!card6Flipped);
        break;
    }
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={card5Flipped}>
        <div className="front" onMouseEnter={() => flipCard(5)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(5)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>6 Ton Gear Transmission Crimping Machine </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p top">
                <p>Capacity</p>
                <p>Model</p>
                <p>Type</p>
                <p>Max Crimp Cross</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p btm">
                <p>16 Ton</p>
                <p>HF - 16 Ton </p>
                <p>Gear Transmission</p>
                <p>6.00 to 120.0 MM2 Cable</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection="horizontal" isFlipped={card6Flipped}>
        <div className="front" onMouseEnter={() => flipCard(6)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(6)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>6 Ton Gear Transmission Crimping Machine </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p top">
                <p>Capacity</p>
                <p>Model</p>
                <p>Type</p>
                <p>Max Crimp Cross</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p btm">
                <p>16 Ton</p>
                <p>HF - 16 Ton </p>
                <p>Gear Transmission</p>
                <p>6.00 to 120.0 MM2 Cable</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      <ReactCardFlip flipDirection="horizontal" isFlipped={card3Flipped}>
        <div className="front" onMouseEnter={() => flipCard(3)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(3)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>Fully Automatic Cable Cutting and Stripping Machine </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p top">
                <p>Capacity</p>
                <p>Model</p>
                <p>Length Accuracy</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p btm">
                <p>3.00 mm2 TO 16.00 mm2</p>
                <p>UNISTRIP - 999 + </p>
                <p>+- 0.5 mm( l*0.5%) Depends on the material</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection="horizontal" isFlipped={card4Flipped}>
        <div className="front" onMouseEnter={() => flipCard(4)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(4)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>6 Ton Gear Transmission Crimping Machine </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p top">
                <p>Capacity</p>
                <p>Model</p>
                <p>Type</p>
                <p>Max Crimp Cross</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p btm">
                <p>16 Ton</p>
                <p>HF - 16 Ton </p>
                <p>Gear Transmission</p>
                <p>6.00 to 120.0 MM2 Cable</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      <ReactCardFlip flipDirection="horizontal" isFlipped={card1Flipped}>
        <div className="front" onMouseEnter={() => flipCard(1)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(1)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>6 Ton Gear Transmission Crimping Machine </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p">
                <p>Capacity</p>
                <p>Model</p>
                <p>Type</p>
                <p>Max Crimp Cross</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p">
                <p>16 Ton</p>
                <p>HF - 16 Ton </p>
                <p>Gear Transmission</p>
                <p>6.00 to 120.0 MM2 Cable</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection="horizontal" isFlipped={card2Flipped}>
        <div className="front" onMouseEnter={() => flipCard(2)}>
          <img
            src={TestImg}
            alt="TestImg"
            style={{
              width: "548px",
              height: "457px",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="back" onMouseLeave={() => flipCard(2)}>
          <div className="p-card-back-main">
            <div className="p-card-back-title">
              <p>
                Motorized Push Pull Load Tester With Variable Speed Controller{" "}
              </p>
            </div>
            <div className="p-card-back-subtext">
              <div className="p-subtext-back-p top">
                <p>Capacity</p>
                <p>Model</p>
              </div>
              <div className="p-subtext-back-p">
                <p>:</p>
                <p>:</p>
              </div>
              <div className="p-subtext-back-p btm">
                <p>0 to 500Kg</p>
                <p>PPT - 500 </p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default Flipcard;
