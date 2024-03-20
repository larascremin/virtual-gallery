import "./Gallery.css";
import Frame from "./Frame";
import PaintingOne from "../assets/pearl-earring.png";
import PaintingTwo from "../assets/jane-grey.png";
import PaintingThree from "../assets/narcissus.png";
import PaintingFour from "../assets/dante.png";
import PaintingFive from "../assets/saint-jerome.png";
import PaintingSix from "../assets/golias-head.png";
import PaintingSeven from "../assets/meninas.png";
import PaintingEight from "../assets/john-baptist.png";
import PaintingNine from "../assets/anatomy.png";
import PaintingTen from "../assets/incredulity.png";
import PaintingEleven from "../assets/judith-holofernes.png";
import PaintingTwelve from "../assets/saint-matthew.png";
import PaintingThirteen from "../assets/entombment.png";
import PaintingFourteen from "../assets/milkmaid.png";
import PaintingFifteen from "../assets/procuress.png";
import PaintingSixteen from "../assets/anthony.png";
import PaintingSeventeen from "../assets/cathedral.png";
import PaintingEighteen from "../assets/balbi.png";
import PaintingNineteen from "../assets/cupid.png";
import PaintingTwenty from "../assets/eldest.png";

function Picture() {
  return (
    <>
      <Frame
        image={PaintingOne}
        workName="Girl with a Pearl Earring"
        workPainter="Johannes Vermeer"
        workYear={1665}
      />
      <Frame
        image={PaintingTwo}
        workName="Execution of Lady Jane Grey"
        workPainter="Paul Delaroche"
        workYear={1833}
      />
      <Frame
        image={PaintingThree}
        workName="Narcissus"
        workPainter="Michelangelo Caravaggio"
        workYear={1597}
      />
      <Frame
        image={PaintingFour}
        workName="Dante and Virgil"
        workPainter="William Bouguereau"
        workYear={1850}
      />
      <Frame
        image={PaintingFive}
        workName="Saint Jerome Writing"
        workPainter="Michelangelo Caravaggio"
        workYear={1607}
      />
      <Frame
        image={PaintingSix}
        workName="David with the Head of Goliath"
        workPainter="Michelangelo Caravaggio"
        workYear={1609}
      />
      <Frame
        image={PaintingSeven}
        workName="Las Meninas"
        workPainter="Diego Velázquez"
        workYear={1656}
      />
      <Frame
        image={PaintingEight}
        workName="Saint John the Baptist in the Wildernes"
        workPainter="Anthony van Dyck"
        workYear={1656}
      />
      <Frame
        image={PaintingNine}
        workName="The Anatomy Lesson"
        workPainter="Rembrandt"
        workYear={1625}
      />
      <Frame
        image={PaintingTwelve}
        workName="The Inspiration of Saint Matthew"
        workPainter="Michelangelo Caravaggio"
        workYear={1602}
      />

      <Frame
        image={PaintingEleven}
        workName="Judith and Holofernes"
        workPainter="Michelangelo Caravaggio"
        workYear={1599}
      />
      <Frame
        image={PaintingTen}
        workName="The Incredulity of St. Thomas"
        workPainter="Michelangelo Caravaggio"
        workYear={1602}
      />
      <Frame
        image={PaintingThirteen}
        workName="The Entombment of Christ"
        workPainter="Michelangelo Caravaggio"
        workYear={1604}
      />
      <Frame
        image={PaintingFourteen}
        workName="The Milkmaid"
        workPainter="Johannes Vermeer"
        workYear={1659}
      />
      <Frame
        image={PaintingFifteen}
        workName="The Procuress"
        workPainter="Johannes Vermeer"
        workYear={1656}
      />
      <Frame
        image={PaintingSixteen}
        workName="Self-Portrait with a Sunflower"
        workPainter="Anthony van Dyck"
        workYear={1633}
      />
      <Frame
        image={PaintingSeventeen}
        workName="Saint Ambrose barring Theodosius"
        workPainter="Anthony van Dyck"
        workYear={1620}
      />
      <Frame
        image={PaintingEighteen}
        workName="The Balbi Children"
        workPainter="Anthony van Dyck"
        workYear={1625}
      />
      <Frame
        image={PaintingNineteen}
        workName="Father Time clipping Cupid's wings"
        workPainter="Anthony van Dyck"
        workYear={1694}
      />
      <Frame
        image={PaintingTwenty}
        workName="Five Eldest Children of Charles I"
        workPainter="Anthony van Dyck"
        workYear={1637}
      />
    </>
  );
}

export default Picture;
