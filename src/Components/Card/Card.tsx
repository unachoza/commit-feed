//@ts-nocheck
import React from "react";

const Card: React.FC = ({ commit }) => {
  console.log(commit);
  return <div className="card">
    <div className="date-container">

      <div className="date">1/10/2022</div>
      <div className="time">3:15pm</div>
    </div>
    <div className="message">{commit[1].commitMessage}</div>
      <div className="author"> Arianna Choza</div>
  </div>;
};
export default Card;
