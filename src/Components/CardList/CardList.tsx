//@ts-nocheck
import React from 'react';
import Card from "../Card/Card";
interface CardListProps {
  data: any,
  title:string
}
const CardList = (props: CardListProps): JSX.Element => {
  const {card, title} = props;
  return (
    <div className="commit__container">
      {card.length ? (
        <div className="title">
          Showing Results For <strong>{title} </strong>
        </div>
      ) : null}
      {card.length === 1 ? (
        <Card title={card[0]} />
      ) : (
        <ul>
          {Object.entries(card).map((commit, i) =>
            card.length === i + 1 ? (
              <div key={`${commit.title} +${i}`}>{commit.title}</div>
            ) : (
              <li>
                <Card key={i} commit={commit[1]} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default CardList;