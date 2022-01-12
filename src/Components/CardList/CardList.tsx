//@ts-nocheck
import React from "react";
import Card from "../Card/Card";

const CardList = ({ data, title }) => {
  return (
    <div className="commit__container">
      {data.length ? (
        <div className="title">
          Showing Results For <strong>{title} </strong>
        </div>
      ) : null}
      {data.length === 1 ? (
        <Card title={data[0]} />
      ) : (
        <ul>
          {Object.entries(data).map((commit, i) =>
            data.length === i + 1 ? (
              <div key={i}>{commit.title}</div>
            ) : (
              <li>
                <Card key={i} commit={commit} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default CardList;

// const Card = () => {
//   return (
//     <div className="card-list">
//       {cardList.map((card, i) => {
//         <Card key={i} title={card} />;
//       })}
//     </div>
//   );
// };
// export default Card;
