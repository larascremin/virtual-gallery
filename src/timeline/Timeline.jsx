import "./Timeline.css";
import Scroll from "./Scroll";

function Timeline() {
  return (
    <div className="timeline" id="artists">
      <h1>Most Famous Artists: Timeline</h1>
      <p className="secStart">XVI</p>
      <Scroll />
      <p className="secEnd">XVII</p>
    </div>
  );
}

export default Timeline;
