import "../styles/hero.css"
export function Hero() {
    return(
        <div>
           <section className="heroContainer">
                <figure>
                    <img src="/qatar.jpg" alt="" />
                </figure>
                <div className="hero-content">
                    <span>Trending</span>
                    <h2>The Future of AI: A Deep DIve into Tomorrow Technology</h2>
                    <p>A comprehensive look at the advancements shapping our world.</p>
                    <button>Read More</button>
                </div>
           </section>
        </div>
    )
}
