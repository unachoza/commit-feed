//@ts-nocheck
import React, {useState} from "react";
import Card from "../Card/Card";
import LoadingSpinner from '../PulseLoader/PulseLoader';

const cardListings = [{title: 'one'}, {title: 'tewo'}, {title: 'three'}, {title: 'five'}, {title: 'more'}]

const CardList = (props) => {
  console.log({props})

  // const [selectedRepo, setSelectedRepo] = useState({})

  const selectRepository = () => {

    
  }

  return (
    <div className="event-list__container">
      {/* {loading && <LoadingSpinner loading={loading} />} */}
      <div className="title">Showing Results For<span> Chat Bot Repository</span> </div>
      {!cardListings.length ? (
        <div className="no-results">
          Oh dear!<br></br> Your search returned no events.
        </div>
      ) : cardListings.length === 1 ? (
          <Card title={cardListings[0]} selectRepository={ selectRepository} />
      ) : (
        <ul>
          {Object.entries(cardListings).map((event, i) =>
            cardListings.length === i + 1 ? (
              <div key={i}>
                {event.title}
              </div>
            ) : (
              <li key={i}>
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
