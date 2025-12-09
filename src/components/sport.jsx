import "../styles/sport.css"
import { Link } from "react-router-dom"

export function Sport(){
    return(
        <>
            <section className="sportContainer">
                <div className="sportTitle">
                    <h2>Latest in Sport</h2>
                    <Link to={"/"}>
                        <span>See All</span>
                    </Link>
                </div>
                <div className="sportCards">
                    <div className="card1">
                        <img src="/sport1.jpg" alt="person playing basket ball" />
                        <h2>Lakers Clinch Championship</h2>
                        <p>NBA Final Recap</p>
                    </div>
                    <div className="card2">
                        <img src="/sport2.jpg" alt="person playing basket ball" />
                        <h2>World Cup QUalifier: Who's In?</h2>
                        <p>International Soccer News</p>
                    </div>
                    <div className="card3">
                        <img src="/sport3.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                </div>
            </section>
        </>

    )
}