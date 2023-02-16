import React from "react";
import "./contract.scss";
import AppSection from "../appSection/AppSection";

const appImages = [
  { src: "contract/1-graphInitial.jpg", id: 0 },
  { src: "contract/2-graphRunningStart.jpg", id: 1 },
  { src: "contract/3-graphRunning.jpg", id: 2 },
  { src: "contract/4-graphError.jpg", id: 3 },
  { src: "contract/5-settingsErrors.jpg", id: 4 },
  { src: "contract/6-feedback.jpg", id: 5 },
  { src: "contract/7-confirmingActions.jpg", id: 6 },
  { src: "contract/8-preventingErrors.jpg", id: 7 },
  { src: "contract/9-multipleGraphs2.jpg", id: 8 },
  { src: "contract/10-multipleGraphs.jpg", id: 9 },
  { src: "contract/11-license.jpg", id: 10 },
  { src: "contract/12-licenses.jpg", id: 11 },
];

const content = [
  {
    headerText: "Intro",
    paragraphText:
      "This app, alongside a report, was my dissertation project for my masters. \n The project covered the research, design, implementation, and evaluation of a journalling app for people with OCD to be used with their therapists.",
    images: null,
  },
  {
    headerText: "Intro",
    paragraphText:
      "This app, alongside a report, was my dissertation project for my masters. \n The project covered the research, design, implementation, and evaluation of a journalling app for people with OCD to be used with their therapists.",
    images: appImages,
  },
];

export default function Contract() {
  return (
    <div className="contract">
      <h1>Contract App</h1>
      {content.map((section) => (
        <AppSection
          headerText={section.headerText}
          paragraphText={section.paragraphText}
          images={section.images}
        ></AppSection>
      ))}
    </div>
  );
}
