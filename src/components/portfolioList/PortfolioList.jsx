import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ title, active, id,setSelected }) {
    function handleClick(){
        setSelected(id)
    }   
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={handleClick}>
      {title}
    </li>
  );
}
