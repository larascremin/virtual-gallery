import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="principal">
        <h1 className="title">Baroque</h1>
        <p>Vitual Art Gallery</p>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
}

export default Home;
