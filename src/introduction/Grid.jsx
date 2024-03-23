import "./Grid.css";
import Img1 from "../assets/grid1.jpg";
import Img2 from "../assets/grid2.jpg";
import Img3 from "../assets/grid3.jpg";
import Img4 from "../assets/grid4.jpg";
import Img5 from "../assets/grid5.jpg";
import Img6 from "../assets/grid6.jpg";
import Img7 from "../assets/grid7.jpg";
import Img8 from "../assets/grid8.jpg";
import Img9 from "../assets/grid9.jpg";

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
