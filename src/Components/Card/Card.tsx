//@ts-nocheck
import React from "react";

const Card: React.FC = ({ commit }) => {
  console.log(commit);
  return(
   

  <>
      <a href={commit[1].url} className="card" target="_blank" rel="noreferrer"  >
    <div className="date-container">

      <div className="date">{commit[1].date.day}</div>
      <div className="time">{commit[1].date.time}</div>
      </div>
    <div >{commit[1].commitMessage}</div>
      <div className="author">{commit[1].username}</div>
    </a>
  </>
  )
};
export default Card;
