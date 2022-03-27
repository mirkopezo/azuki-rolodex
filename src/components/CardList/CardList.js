import Card from "../Card/Card";
import "./CardList.styles.css";

const CardList = ({ azukis }) => {
  return (
    <div className="card-list">
      {azukis.map((azuki) => {
        return <Card azuki={azuki} />;
      })}
    </div>
  );
};

export default CardList;
