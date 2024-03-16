import Bkg from "../assets/background.png";
import "./Principal.css";

function Principal() {
  return (
    <div className="principal">
      <img src={Bkg} className="principal-bkg" />
      <h1>REINASSANCE</h1>
      <p>Virtual Art Gallery</p>
    </div>
  );
}

export default Principal;
