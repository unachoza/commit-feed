//@ts-nocheck
import React from "react";
import Card from "../Card/Card";
import LoadingSpinner from '../PulseLoader/PulseLoader';

const cardListings = [{title: 'one'}, {title: 'tewo'}, {title: 'three'}, {title: 'five'}, {title: 'more'}]

const CardList = ({ loading, data }) => {
  console.log(data)
  return (
    <div className="event-list__container">
      {/* {loading && <LoadingSpinner loading={loading} />} */}
      <div className="title">Showing Results For<span> Chat Bot</span> </div>
      {!data.length ? (
        <div className="no-results">
          Oh dear!<br></br> Your search returned no results.
        </div>
      ) : data.length === 1 ? (
        <Card title={data[0]} />
      ) : (
        <ul>
          {Object.entries(data).map((commit, i) =>
            data.length === i + 1 ? (
              <div key={i}>
                {commit.title}
              </div>
            ) : (
              <li>
                <Card key={i} commit={commit} />
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
