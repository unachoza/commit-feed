//@ts-nocheck

const Card: React.FC = (props) => {
  const { title, selectRepository } = props.event;
  // console.log(title)
  return <div className="card">
    <div className="date-container">

      <div className="date">1/10/2022</div>
      <div className="time">3:15pm</div>
    </div>
    <div className="message">{title } Consolidated Code</div>
      <div className="author"> Arianna Choza</div>
  </div>;
};
export default Card;
