import React from "react";

export interface CardProps {
  commitMessage: string;
  username: string;
  date: { day: string; time: string };
  url: string;
}

const Card = (props: any): JSX.Element => {
  const { commit } = props;
  return (
    <>
      <a href={commit.url} className="card" target="_blank" rel="noreferrer">
        <div className="date-container">
          <div className="date">{commit.date.day}</div>
          <div className="time">{commit.date.time}</div>
        </div>
        <div className="message">{commit.commitMessage}</div>
        <div className="author">
          {" "}
          <span>Author</span> {commit.username}
        </div>
      </a>
    </>
  );
};
export default Card;
