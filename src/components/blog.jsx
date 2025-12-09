import "../styles/blog.css"

export function Blog(){
    return(
        <div>
            <section className="blogContainer">
                <h1>From Our Blog</h1>
                <article>
                    <figure>
                        <img src="/blogimage1.jpg" alt="Laptop image" />
                    </figure>
                    <div className="articleContent">
                        <h2>10 Productivity Hacks from Remote Workers</h2>
                        <p>Boost your efficiency and mentain work-life balance with thess proven tips</p>
                        <span>Lifestyle • 5 min read</span>
                    </div>
                </article>
                <article>
                    <figure>
                        <img src="/blogimage2.jpg" alt="Fruit image" />
                    </figure>
                    <div className="articleContent">
                        <h2>The Beginner's Guide to Meal Prepping</h2>
                        <p>Save time and eat healthier by planning your meals for the week ahead.</p>
                        <span>Health & Wellness • 8 min read</span>
                    </div>
                </article>
                <article>
                    <figure>
                        <img src="/blogimage3.webp" alt="Image of a woman" />
                    </figure>
                    <div className="articleContent">
                        <h2>Mindfulness in a Digital Age</h2>
                        <p>Find calm and focus in a world of constant notifications and distractions.</p>
                        <span>Mindfulness • 6 min read</span>
                    </div>
                </article>
            </section>
            
        </div>
    )
}