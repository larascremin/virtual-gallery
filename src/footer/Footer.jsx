import "./Footer.css";
import leftHand from "../assets/left-hand.png";
import rightHand from "../assets/right-hand.png";

function Footer() {
  return (
    <div className="footer">
      <img src={leftHand} className="left-hand" />
      <div className="footer-content">
        <h2 className="creator">
          <a href="#">The Creator</a>
        </h2>
        <p>
          <a href="#">Baroque</a>
        </p>
        <p>
          <a href="#">Artist</a>
        </p>
        <p>
          <a href="#">Paintings</a>
        </p>
      </div>
      <div className="right-hand-content">
        <img src={rightHand} className="right-hand" />
      </div>

      <p className="rights">Created and Owned by Lara Scremin @2024</p>
    </div>
  );
}

export default Footer;
