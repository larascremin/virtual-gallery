function Artist(props) {
  return (
    <div className="artist reveal">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.description}</p>
      <p>
        Famous work: <br />
        <i>"{props.work}"</i>
      </p>
    </div>
  );
}

export default Artist;
