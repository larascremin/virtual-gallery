import "./Frame.css";

function Frame(props) {
  return (
    <div className="frames">
      <img src={props.image} className="frames-img" />
      <h4>
        <i>"{props.workName}"</i>
      </h4>
      <p>
        by {props.workPainter}, {props.workYear}
      </p>
    </div>
  );
}

export default Frame;
