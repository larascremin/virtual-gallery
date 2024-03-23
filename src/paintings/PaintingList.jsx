import "./Frame.css";

function PaintingList({ paintings }) {
  return (
    <div>
      {paintings.map((painting, index) => (
        <div key={index} className="frames">
          <img src={painting.image} className="frames-img" />
          <h3>"{painting.name}"</h3>
          <p>
            by {painting.creator}, {painting.year}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PaintingList;
