//@ts-nocheck
import React from "react";

const Card: React.FC = ({ commit }) => {
  console.log(commit);
  return <div className="card">
    <div className="date-container">

      <div className="date">{commit[1].date.day}</div>
      <div className="time">{commit[1].date.time}</div>
    </div>
    <div className="message">{commit[1].commitMessage}</div>
      <div className="author"> Arianna Choza</div>
  </div>;
};
export default Card;
