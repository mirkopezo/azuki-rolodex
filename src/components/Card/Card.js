import "./Card.styles.css";

const Card = ({ azuki }) => {
  const { name, id } = azuki;
  return (
    <div className="card">
      <img
        height="220"
        alt="azuki"
        src={`https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/${id}.png`}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
