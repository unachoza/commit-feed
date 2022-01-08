//@ts-nocheck
import React from "react";
import Card from "../Card/Card";
import LoadingSpinner from '../PulseLoader/PulseLoader';

const cardListings = [{title: 'one'}, {title: 'tewo'}, {title: 'three'}, {title: 'five'}, {title: 'more'}]

const CardList = ({ loading }) => {
  return (
    <div className="event-list__container">
      {/* {loading && <LoadingSpinner loading={loading} />} */}
      {!cardListings.length ? (
        <div className="no-results">
          Oh dear!<br></br> Your search returned no events.
        </div>
      ) : cardListings.length === 1 ? (
        <Card card={cardListings[0]} />
      ) : (
        <ul>
          {Object.entries(cardListings).map((event, i) =>
            cardListings.length === i + 1 ? (
              <div key={i}>
                {event.title}
              </div>
            ) : (
              <li>
                <Card key={i} event={event[1]} />
              </li>
            )
          )}
        </ul>
      )}
      {/* {loading && <LoadingSpinner loading={loading} />} */}
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
