import "./Gallery.css";
import Frame from "./Frame";
import PaintingOne from "../assets/pearl-earring.png";
import PaintingTwo from "../assets/jane-grey.png";
import PaintingThree from "../assets/narcissus.png";
import PaintingFour from "../assets/dante.png";
import PaintingFive from "../assets/saint-jerome.png";
import PaintingSix from "../assets/golias-head.png";

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
    </>
  );
}

export default Picture;
