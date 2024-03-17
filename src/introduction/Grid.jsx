import "./Grid.css";
import Img1 from "../assets/grid1.png";
import Img2 from "../assets/grid2.png";
import Img3 from "../assets/grid3.png";
import Img4 from "../assets/grid4.png";
import Img5 from "../assets/grid5.png";
import Img6 from "../assets/grid6.png";
import Img7 from "../assets/grid7.png";
import Img8 from "../assets/grid8.png";
import Img9 from "../assets/grid9.png";

function Grid() {
  return (
    <div className="introduction-img">
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
      <img src={Img5} />
      <img src={Img6} />
      <img src={Img7} />
      <img src={Img8} />
      <img src={Img9} />
    </div>
  );
}

export default Grid;
