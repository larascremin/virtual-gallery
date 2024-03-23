import Grid from "./Grid";
import Button from "./Button";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <h1>The Baroque Art</h1>
      <div className="introduction-content">
        <h3>A Journey into Art and Culture</h3>
        <p>
          The Baroque painting was characterized by a dramatic, emotional, and
          highly ornate approach, contrasting with the serenity and simplicity
          of the Renaissance. Baroque artists used techniques such as
          chiaroscuro, tenebrism, and forced perspective to create a sense of
          depth and movement.
        </p>
        <p>
          Overall, Baroque painting was marked by its visual richness and
          dramatic realism. These make Baroque art one of the most fascinating
          and influential periods in art history.
        </p>
        <ul>
          <li>Religious and Mythological Themes</li>
          <li>Contrast between Light and Shadow</li>
          <li>Dramatic and Emotional Expression</li>
          <li>Still Life and Landscapes</li>
        </ul>
        <Button />
      </div>
      <Grid />
    </div>
  );
}

export default Introduction;
