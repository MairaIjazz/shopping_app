import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const Banner = () => {
  const slideImages = [
    {
      url: "model5.jpg",
    },
    {
      url: "model2.jpg",
    },
    {
      url: "model4.jpg",
    },
  ];
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="images_setting"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  // height: " 62rem",
                  // backgroundSize: "100%",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "50% 0%",
                }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Banner;
