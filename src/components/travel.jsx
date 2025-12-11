import { Link } from "react-router-dom";
import "../styles/travel.css";

export function TravelAndTourism() {
  return (
    <>
      <section className="travelAndTourismContainer">
        <div className="travelTitle">
          <h2>Travel & Tourism</h2>
          <Link to={"/"}>
            <span>See All</span>
          </Link>
        </div>
        <div className="travelCards">
          <div className="card">
            <img src="/islandimg.jpg" alt="Greek Island" />
            <h2>Top 10 Greek Islands to visit</h2>
            <p>Mediterranean Gems</p>
          </div>
          <div className="card">
            <img src="/ballfields.jpg" alt="Hidden Ball Field" />
            <h2>A Guide to Ball's Hidden Spots</h2>
            <p>Southeast Asia Adventures</p>
          </div>
          <div className="card">
            <img src="/paris.png" alt="Paris Tower" />
            <h2>48 Hours in Paris: An Itinery</h2>
            <p>European City Breaks</p>
          </div>
        </div>
      </section>
    </>
  );
}
