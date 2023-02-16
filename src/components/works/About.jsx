import React, { useState } from "react";
import "./about.scss";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "0",
      title: "About me",
      desc: "Outside of software development I have many interests and hobbies...",
      img: "./assets/about/portrait2.jpg",
    },
    {
      id: "1",
      title: "Rock Climbing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "./assets/about/climbing.png",
    },
    {
      id: "2",
      title: "Cycling",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/about/cycling.jpg",
    },
    {
      id: "3",
      title: "Hiking",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/about/hiking2.jpg",
    },
  ];

  function handleClick(direction) {
    if (direction === "left") {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    } else {
      setCurrentSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
  }

  function AboutItem({ data }) {
    console.log(data.title, data.desc);
    return (
      <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </div>
          <div className="right">
            <img src={data.img} alt="" />
          </div>
        </div>
      </div>
    );
  }

  // function AboutMeItem() {
  //   return (
  //     <div className="container">
  //       <div className="item">
  //         <div className="left">
  //           <div className="leftContainer">
  //             <h2>About Me</h2>
  //             <p>Outside of software development I have many interests and hobbies...</p>
  //           </div>
  //         </div>
  //         <div className="right">
  //           <img
  //           src={"./assets/about/portrait2.jpg"}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <AboutItem data={d}></AboutItem>
        ))}
      </div>
      <ChevronRight
        className="arrow right"
        onClick={() => handleClick("right")}
      ></ChevronRight>
      <ChevronLeft
        className="arrow left"
        onClick={() => handleClick("left")}
      ></ChevronLeft>
    </div>
  );
}
