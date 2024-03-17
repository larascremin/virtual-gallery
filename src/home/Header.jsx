import Dropdown from "./Dropdown";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="creator">
        <a href="#">The Creator</a>
      </h2>
      <Dropdown />
    </div>
  );
}

export default Header;
