import "./History.css";
import Map from "../assets/map.png";

function History() {
  return (
    <div className="history">
      <img src={Map} />
      <div className="history-content">
        <h1> How did it Originate?</h1>
        <p className="p-first">
          The Baroque was an artistic and cultural movement that flourished in
          Europe between the late 16th and early 18th centuries. Emerging as a
          response to the rigor and simplicity of the Renaissance, the Baroque
          style was characterized by its extravagance, drama, and emotion.
        </p>
        <p>
          The Baroque style was not only present in paintings but also in
          architecture, literature, music, and culture.
        </p>
      </div>
    </div>
  );
}

export default History;
