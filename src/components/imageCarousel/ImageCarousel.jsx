import React, { useState, useEffect } from "react";
import "./imageCarousel.scss";
import { ChevronLeft, ChevronRight, Directions } from "@material-ui/icons";

export default function ImageCarousel({ style, images }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [hiddenClass, setHiddenClass] = useState("small");
  const [imgClasses, setImgClasses] = useState(Array(images.length));
  const [overDisplayLimit, setOverDisplayLimit] = useState(false);
  function handleScroll(movement) {
    setCurrentImg((prev) => {
      if (prev + movement > images.length - 1) {
        return 0;
      } else if (prev + movement < 0) {
        return images.length - 1;
      } else {
        return prev + movement;
      }
    });
  }

  function testOverDisplayLimit() {
    console.log("checking limit", images.length);
    if (images.length > 5) {
      console.log("checking limit", true);
      setOverDisplayLimit(true);
    } else {
      console.log("checking limit", false);

      setOverDisplayLimit(false);
    }
  }
  useEffect(() => {
    testOverDisplayLimit();
  }, [images]);

  useEffect(() => {
    console.log("current ", currentImg);

    let tempImgClasses = Array(images.length);
    console.log(images[currentImg]);
    console.log(" limit", overDisplayLimit);

    if (images[currentImg].large) {
      console.log("here");
      tempImgClasses.fill("hidden");
    } else if (images.length > 5) {
      tempImgClasses.fill("hidden");
      if (currentImg < 2) {
        // if current < 2 first 5 are small
        for (let i = 0; i <= 4; i++) tempImgClasses[i] = "small";
      } else if (images.length - 1 - currentImg <= 2) {
        // if current is within 2 of images.length last 5 are small
        for (let i = images.length - 1; i >= images.length - 5; i--)
          tempImgClasses[i] = "small";
      } else {
        // else 5 centerd around current are small
        for (let i = currentImg - 2; i <= currentImg + 2; i++) {
          if (i < 0 || i > images.length - 1) {
            continue;
          }
          tempImgClasses[i] = "small";
        }
      }
    } else {
      tempImgClasses.fill("small");
    }
    tempImgClasses[currentImg] = "active";

    // console.log(images[currentImg - 1]);
    // if (images[currentImg - 1].large) {
    //   console.log("current large");
    //   tempImgClasses.fill("hidden");
    //   return;
    // } else if (overDisplayLimit) {
    //   console.log("over limit");
    //   tempImgClasses.fill("hidden");
    //   console.log("current", currentImg);
    //   for (let i = currentImg - 3; i++; i <= currentImg + 1) {
    //     console.log(i);

    //     tempImgClasses[i] = "small";
    //   }
    // } else {
    //   console.log("other");
    //   tempImgClasses.fill("small");
    // }
    // tempImgClasses[currentImg - 1] = "active";

    setImgClasses(tempImgClasses);
  }, [currentImg]);

  useEffect(() => {
    console.log(imgClasses);
  }, [imgClasses]);

  return (
    <div className="carousel" style={style}>
      <ChevronLeft
        className="arrow"
        onClick={() => handleScroll(-1)}
      ></ChevronLeft>
      {images.map((image, i) => (
        <img
          src={`assets/${image.src}`}
          id={image.id}
          className={imgClasses[image.id]}
        ></img>
      ))}
      <ChevronRight
        className="arrow"
        onClick={() => handleScroll(1)}
      ></ChevronRight>
    </div>
  );
}
