import Card from "../Card/Card";
import "./CardList.styles.css";

const CardList = ({ azukis }) => {
  return (
    <div className="card-list">
      {azukis.map((azuki) => {
        return <Card key={azuki.id} azuki={azuki} />;
      })}
    </div>
  );
};

export default CardList;
