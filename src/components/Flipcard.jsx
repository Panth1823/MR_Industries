import ReactCardFlip from "react-card-flip";
import "../panth.css";
import { useState } from "react";
import TestImg from "../assets/TestImg.png";

const Flipcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipcard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div className="front" onClick={flipcard}>
        <img
          src={TestImg}
          alt="TestImg"
          style={{ width: "548px", height: "457px", borderRadius: "20px" }}
          />
      </div>
      <div className="back" onClick={flipcard}>
        <img
          src={TestImg}
          alt="TestImg"
          style={{ width: "548px", height: "457px", borderRadius: "20px" }}
        />
      </div>
    </ReactCardFlip>
    

    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
    <div className="front" onClick={flipcard}>
      <img
        src={TestImg}
        alt="TestImg"
        style={{ width: "548px", height: "457px", borderRadius: "20px" }}
        />
    </div>
    <div className="back" onClick={flipcard}>
      <img
        src={TestImg}
        alt="TestImg"
        style={{ width: "548px", height: "457px", borderRadius: "20px" }}
        />
    </div>
  </ReactCardFlip>


<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
<div className="front" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
<div className="back" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
</ReactCardFlip>


<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
<div className="front" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
<div className="back" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
</ReactCardFlip>


<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
<div className="front" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
<div className="back" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
</ReactCardFlip>

<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
<div className="front" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
<div className="back" onClick={flipcard}>
  <img
    src={TestImg}
    alt="TestImg"
    style={{ width: "548px", height: "457px", borderRadius: "20px" }}
    />
</div>
</ReactCardFlip>
    </>

  );
};

export default Flipcard;
