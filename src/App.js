import { useState, useRef, useEffect } from "react";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/works/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";

import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Diary from "./components/diary/Diary";
import Contract from "./components/contract/Contract";


function HomePage() {

  const [xPosition, setXPosition] = useState();
  const containerRef = useRef(null);

  function onPop() {
    let temp = sessionStorage.getItem("xPosition");
    if (temp) containerRef.current.scrollTop = temp;
  }

  useEffect(() => {
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    let temp = sessionStorage.getItem("xPosition");
    if (temp) containerRef.current.scrollTop = temp;
  }, []);

  useEffect(() => {
    if (xPosition) sessionStorage.setItem("xPosition", xPosition);
  }, [xPosition]);

  useEffect(() => {
    let instance = containerRef.current;
    instance.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => instance.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(e) {
    console.log("handle scroll");
    // only run when scroll next to snapping
    if (
      e.target.scrollTop === 0 ||
      e.target.scrollTop % (window.innerHeight - 70) <= 1
    ) {
      setXPosition(e.target.scrollTop);
    }
  }
  return (
    <div className="sections" ref={containerRef}>
      <Intro />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  // function scrollToSection(sectionId) {
  //   let instance = containerRef.current;
  //   let position;
  //   switch (sectionId) {
  //     case "intro":
  //       console.log("intro");
  //       position = 0;
  //       instance.scrollTop = position;
  //       setXPosition(position);
  //       // sessionStorage.setItem("xPosition", position);
  //       break;
  //     case "portfolio":
  //       console.log("portfolio");
  //       position = window.innerHeight - 70;
  //       console.log(position);
  //       instance.scrollTop = position;
  //       setXPosition(position);

  //       // sessionStorage.setItem("xPosition", position);
  //       break;
  //     case "works":
  //       console.log("works");
  //       position = (window.innerHeight - 70) * 2;
  //       console.log(position);
  //       instance.scrollTop = position;
  //       setXPosition(position);

  //       // sessionStorage.setItem("xPosition", position);
  //       break;
  //     case "contact":
  //       console.log("contact");
  //       position = (window.innerHeight - 70) * 3;
  //       console.log(position);
  //       instance.scrollTop = position;
  //       setXPosition(position);

  //       // sessionStorage.setItem("xPosition", position);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/contract" element={<Contract />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
