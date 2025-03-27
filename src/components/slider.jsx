import React, { useState } from "react";
import "../../public/slider.css"; // Ensure this path is correct
import left from "../../public/media/slide-left.png";
import right from "../../public/media/slide-right.png";
const slides = [
  {
    slideno: 1,
    model:"DJI Neo",

  },
  {
    slideno: 2,
    model:"Osmo Action 5 pro",

  },
  {
    slideno: 3,
    model:"DJI Air 3s",

  },
  {
    slideno: 4,
    model:"DJI Flycart 30"
  },
  {
    slideno: 5,
    model:"DJI Flip",

  },
  {
    slideno: 6,
    model:"Osmo Pocket 3",

  },
  {
    slideno: 7,
    model:"DJI RS 4 Mini",

  },
];
function Slider() {
  const [currentindex, setcurrentindex] = useState(5);
  function moveright() {
    if (currentindex == 7) {
      setcurrentindex(1);
    } else {
      setcurrentindex((prevValue) => {
        return prevValue + 1;
      });
    }
  }

  function moveleft() {
    if (currentindex == 1) {
      setcurrentindex(7);
    } else {
      setcurrentindex((prevValue) => {
        return prevValue - 1;
      });
    }
  }

  function sliderclick(si) {
    setcurrentindex(si);
  }
  return (
    <div className="sliderclass">
      <img
        className="right arrow"
        onClick={() => {
          console.log("right");

          moveright();
        }}
        src={right}
      ></img>
      <img
        className="left arrow"
        onClick={() => {
          console.log("left");

          moveleft();
        }}
        src={left}
      ></img>
        {slides.map((slide, slideindex) => (
          <div
           className="dronedata"
            key={slideindex}
          >
          </div>
        ))}

      <video autoPlay loop muted key={currentindex}>
        <source
          src={`/media/droneshots/shot${currentindex}.mp4`}
          type="video/mp4"
        />
      </video>
      <h2 className="model-name">
        Shot on <span>   <br></br></span>
          {slides.find((slide) => slide.slideno === currentindex)?.model}
        </h2>

      <div className="dotbox">
        {slides.map((slide, slideindex) => (
          <div
            key={slideindex}
            onClick={() => {
              sliderclick(slide.slideno);
              console.log(slide.slideno);
            }}
            className={`dots ${currentindex === slide.slideno ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
