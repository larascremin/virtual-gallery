import ArtistOne from "../assets/one.png";
import ArtistTwo from "../assets/two.png";
import ArtistThree from "../assets/three.png";
import ArtistFour from "../assets/four.png";
import ArtistFive from "../assets/five.png";

import "./Artists.css";

function Artists() {
  return (
    <div className="artists">
      <div className="artist-one">
        <img src={ArtistOne} />
        <h3>Michelangelo Merisi Caravaggio</h3>
        <p>1571 - 1610</p>
        <p>
          One of the most important painters of the Baroque period. His
          revolutionary technique of using dramatic light and shadow influenced
          many later artists.
        </p>
        <p>Famous work: "The Calling of Saint Matthew"</p>
      </div>
      <div className="artist-two">
        <img src={ArtistTwo} />
        <h3>Artemisia Gentileschi</h3>
        <p>1593 - 1656</p>
        <p>
          One of the first female artists to achieve significant recognition.
          She is known for her dramatic and powerful paintings
        </p>
        <p>Famous work: "Judith Slaying Holofernes"</p>
      </div>
      <div className="artist-three">
        <img src={ArtistThree} />
        <h3>Francisco de Zurbarán</h3>
        <p>1598 - 1664</p>
        <p>
          His ability to capture detail and his distinctive color palette are
          hallmarks of his art.
        </p>
        <p>Famous work: "The Virgin and Child with Saint John the Baptist"</p>
      </div>
      <div className="artist-four">
        <img src={ArtistFour} />
        <h3>Anthony van Dyck</h3>
        <p>1599 - 1641</p>
        <p>
          He was known for his ability to capture the nobility and elegance of
          his subjects.
        </p>
        <p>Famous work: "Charles I at the Hunt"</p>
      </div>
      <div className="artist-five">
        <img src={ArtistFive} />
        <h3>Johannes Vermeer</h3>
        <p>1632 - 1675</p>
        <p>
          A master of genre painting, known for his realistic portrayals of
          Dutch domestic life. His ability to capture light and atmosphere is
          unparalleled.
        </p>
        <p>Famous work: "Girl with a Pearl Earring"</p>
      </div>
    </div>
  );
}

export default Artists;
