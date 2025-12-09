import { Hero } from "../components/hero"
import { Sport } from "../components/sport"
import { Blog } from "../components/blog"
import { Topnavbar } from "../components/topnavbar"
import { Footer } from "../components/footer"
export function Home() {
    return(
        <div>
            <Topnavbar />
            <Hero />
            <Sport />
            <Blog />
            <Footer />
        </div>
    )
}
