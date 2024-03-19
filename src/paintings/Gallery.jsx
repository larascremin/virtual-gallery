import "./Gallery.css";
import Frame from "./Frame";
import PaintingOne from "../assets/girl.png";
import PaintingTwo from "../assets/skull.png";
import PaintingThree from "../assets/narciso.png";
import PaintingFour from "../assets/young.png";
import PaintingFive from "../assets/frame5.png";
import PaintingSix from "../assets/frame6.png";

function Picture() {
  return (
    <>
      <Frame
        image={PaintingFour}
        workName="garota no balanço"
        workPainter="caravaggio"
        workYear={1698}
      />
      <Frame
        image={PaintingOne}
        workName="brincos de perola"
        workPainter="caravaggio"
        workYear={1758}
      />
      <Frame
        image={PaintingTwo}
        workName="brincos de perola"
        workPainter="caravaggio"
        workYear={1758}
      />
      <Frame
        image={PaintingThree}
        workName="brincos de perola"
        workPainter="caravaggio"
        workYear={1758}
      />
      <Frame
        image={PaintingFive}
        workName="brincos de perola"
        workPainter="caravaggio"
        workYear={1758}
      />
      <Frame
        image={PaintingSix}
        workName="brincos de perola"
        workPainter="caravaggio"
        workYear={1758}
      />
    </>
  );
}

export default Picture;
