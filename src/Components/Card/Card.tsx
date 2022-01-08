//@ts-nocheck
import React from "react";

const Card: React.FC = ({ title }) => {
  console.log(title)
  return <div className="card">
    <div className="owner">
      <div className="title">This Repository Title</div>
      <div className="author">Owner: Arianna Choza</div>
    </div>
    <div className="message">Consolidated Code</div>
    <div className="date-container">

      <div className="date">1/10/2022</div>
      <div className="time">3:15pm</div>
    </div>
  </div>;
};
export default Card;
