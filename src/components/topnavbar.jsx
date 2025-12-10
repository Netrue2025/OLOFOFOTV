import "../styles/topnavbar.css"
import { CiSearch } from "react-icons/ci";

export function Topnavbar(){
    return(
        <div>
            <header>
                <nav>
                    <figure>
                        {/* <img src="/darkicon.png" alt="dark Mode icon" /> */}
                        <img src="/OLOFOFO.png" alt="" />
                    </figure>

                    <h1>NewsFeed</h1>
                    <CiSearch className="searchIcon"/>
                </nav>
            </header>
        </div>
    )
}
