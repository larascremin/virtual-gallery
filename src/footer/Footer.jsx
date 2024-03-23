import leftHand from "../assets/left-hand.png";
import rightHand from "../assets/right-hand.png";

import Creator from "../home/Creator";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={leftHand} className="left-hand" />
      <div className="footer-content">
        <Creator />
        <p>
          <a href="#introduction">Baroque</a>
        </p>
        <p>
          <a href="#artists">Artist</a>
        </p>
        <p>
          <a href="#paintings">Paintings</a>
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
