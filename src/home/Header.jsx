import Dropdown from "./Dropdown";
import Creator from "./Creator";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Creator />
      <Dropdown />
    </div>
  );
}

export default Header;
