function Artist(props) {
  return (
    <div className="artist reveal">
      <img src={props.image} />
      <h3>
        {props.name}, <br /> {props.age}
      </h3>
      <p>{props.description}</p>
      <p>
        Famous work: <br />
        <i>"{props.work}"</i>
      </p>
    </div>
  );
}

export default Artist;
