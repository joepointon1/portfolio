import React, { useState, useEffect, useRef } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio } from "./data";
import { Link } from "react-router-dom";

function PortfolioItem({d}) {
  return (
    <div className="item">
      <img src={d.img} alt="" />
      <div className="links">
      <Link to={d.link}><span>Site</span></Link>
      {d.github && <><Link className="left-border" to={d.github}><span>GitHub</span></Link></>}

      </div>
      <h3>{d.title}</h3>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState("mobile");
  const [data, setData] = useState([]);
  const list = [
    { id: "mobile", title: "Mobile App" },
    { id: "web", title: "Web App" },
  ];

  useEffect(() => {
    if (selected === "web") {
      setData(webPortfolio);
    } else {
      setData(mobilePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <PortfolioItem d={d}></PortfolioItem>
        ))}
      </div>
    </div>
  );
}
