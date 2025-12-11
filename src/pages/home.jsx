import { Hero } from "../components/hero"
import { Sport } from "../components/sport"
import { Blog } from "../components/blog"
import { Topnavbar } from "../components/topnavbar"
import { Footer } from "../components/footer"
import { News } from "../components/news"
import { TravelAndTourism } from "../components/travel"
export function Home() {
    return(
        <div>
            <Topnavbar />
            <Hero />
            <Sport />
            <TravelAndTourism />
            <News />
            <Blog />
            <Footer />
        </div>
    )
}
