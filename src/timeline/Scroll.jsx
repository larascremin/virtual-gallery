import ArtistOne from "../assets/one.png";
import ArtistTwo from "../assets/two.png";
import ArtistThree from "../assets/three.png";
import ArtistFour from "../assets/four.png";
import ArtistFive from "../assets/five.png";

import Artist from "./Artist";
import Reveal from "./Reveal";
import "./Scroll.css";
import "./Artist.css";

function Scroll() {
  return (
    <>
      <Reveal />
      <div className="scroll">
        <div className="checkpoint" id="one">
          <Artist
            onShow={true}
            image={ArtistOne}
            name="Michelangelo Merisi Caravaggio"
            age="1571 - 1610"
            description="One of the most important painters of the Baroque period. His
            revolutionary technique of using dramatic light and shadow
            influenced many later artists."
            work="The Calling of Saint Matthew"
          />
        </div>
        <div className="checkpoint" id="two">
          <Artist
            onShow={true}
            image={ArtistTwo}
            name="Artemisia Gentileschi"
            age="1593 - 1656"
            description="One of the first female artists to achieve significant
            recognition. She is known for her dramatic and powerful paintings."
            work="Judith Slaying Holofernes"
          />
        </div>
        <div className="checkpoint" id="three">
          <Artist
            onShow={true}
            image={ArtistThree}
            name="Francisco de Zurbarán"
            age="1598 - 1664"
            description="His ability to capture detail and his distinctive color palette
            are hallmarks of his art."
            work="The Virgin and Child with Saint John the Baptist"
          />
        </div>
        <div className="checkpoint" id="four">
          <Artist
            onShow={true}
            image={ArtistFour}
            name="Anthony van Dyck"
            age="1599 - 1641"
            description="He was known for his ability to capture the nobility and elegance
            of his subjects."
            work="Charles I at the Hunt"
          />
        </div>
        <div className="checkpoint" id="five">
          <Artist
            onShow={true}
            image={ArtistFive}
            name="Johannes Vermeer"
            age="1632 - 1675"
            description="A master of genre painting, known for his realistic portrayals of
            Dutch domestic life. His ability to capture light and atmosphere
            is unparalleled."
            work="Girl with a Pearl Earring"
          />
        </div>
      </div>
    </>
  );
}

export default Scroll;
