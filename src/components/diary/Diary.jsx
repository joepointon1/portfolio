import React from "react";
import "./diary.scss";
import AppSection from "../appSection/AppSection"

const planningImages = [
  { src: "logInWireframe.png", id: 0 },
  { src: "homeWireframe.png", id: 1 },
  { src: "diary1Wireframe.png", id: 2, large: true },
  { src: "diary2Wireframe.png", id: 3, large: true },
  { src: "diaryListWireframe.png", id: 4 },
  { src: "therapistViewWireframe.png", id: 5, large: true },
  { src: "frontEndStructure.png", id: 6, large: true },
  { src: "UML.png", id: 7, large: true },
];

const implementationImages = [
  { src: "menu.png", id: 0 },
  { src: "diary1.png", id: 1 },
  { src: "diary2.png", id: 2 },
  { src: "diary3.png", id: 3 },
  { src: "diaryList.png", id: 4 },
];

const content = [
  {
    headerText: "Intro",
    paragraphText:
      "This app, alongside a report, was my dissertation project for my masters. \n The project covered the research, design, implementation, and evaluation of a journalling app for people with OCD to be used with their therapists.",
    images: null,
  },
  {
    headerText: "Research",
    paragraphText:
      "This stage of the project included background reading on OCD (types, impacts and treatments), a problem definition, a review of exisiting similar products, literature review of CBT exercises for OCD patients, and writing user personas",
    images: null,
  },
  {
    headerText: "Design",
    paragraphText:
      "In the design stage I defined product requirements and use cases, drew and reviewed UI wirerframesand planned the architecture of the backend and the structure of the frontend",
    images: planningImages,
  },
  {
    headerText: "Implementation",
    paragraphText:
      "The project was a fullstack app, using React Native for the frontend and node, express, axios, monogo and mongoose for the backend",
    images: implementationImages,
  },
  {
    headerText: "Evaluation",
    paragraphText:
      "To finish the project the app was, evaluated against the requirements set out at the start of the project, evaluated using the system useability scale by people with OCD and a therapist and evalutaed using observational testing on people without OCD",
    images: null,
  },
];

export default function Diary() {
  return (
    <div className="diary">
      <h1>A Personal Diary App for People with OCD</h1>
      {content.map((section) => (
        <AppSection
          headerText={section.headerText}
          paragraphText={section.paragraphText}
          images={section.images}
        ></AppSection>
      ))}
      <div className="section">
        <h2>More?</h2>
        <p>
          Interested in reading more? Click{" "}
          <a href="../assets/public/files/report.pdf" download>
            here
          </a>{" "}
          to download my report
        </p>
      </div>
    </div>
  );
}
