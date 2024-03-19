import "./Frame.css";

function Frame(props) {
  return (
    <div className="frames">
      <img src={props.image} className="frames-img" />
      <h2>"{props.workName}"</h2>
      <p>
        by {props.workPainter} <br /> {props.workYear}
      </p>
    </div>
  );
}

export default Frame;
