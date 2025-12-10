import { IoIosArrowBack } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import "../styles/read.css";
import { Footer } from "../components/footer"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Read(){
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <section className="readContainer">
                <header>
                    <Link className="link" to="/">
                        <IoIosArrowBack className="readIcon"/>
                    </Link>
                    
                    <CiBookmark className="readIcon"/>
                </header>
            </section>

            <section className="readContainer">
                <div className="headerContent">
                    <figure>
                        <img src={`https://abiwrite.com/admin/images/${location.state.image}`} alt="Image of blog post" />
                    </figure>
                    <h1>{location.state.heading}</h1>
                    <div className="profile">
                        <div className="profileCon">
                            <img src="/sport1.jpg" alt="Profile picture" />
                            <h3>{location.state.postedby}</h3>

                        </div>
                        <span>{location.state.date}</span>
                    </div>
                </div>
            </section>

            <section className="readContainer">
                <p>
                   {location.state.body}
                </p>
            </section>

            <section className="readContainer">
                <h2>Share this article</h2>
                <div className="shareLinks">
                    <CiShare2 className="shareLink"/>
                    <IoMdLink className="shareLink"/>
                    <FaTelegram className="shareLink"/>
                    <CiFacebook className="shareLink"/>
                </div>
            </section>

            <section className="readContainer">
                <div className="youMightLikeThis">
                    <h2>You might also like</h2>
                    <div className="otherBlog">
                        <figure>
                            <img src="/sport2.jpg" alt="" />
                        </figure>
                        <div className="otheBloContent">
                            <p>Technology</p>
                            <h2>The Rise of Quantum Computing</h2>
                        </div>
                    </div>
                    <div className="otherBlog">
                        <figure>
                            <img src="/sport1.jpg" alt="" />
                        </figure>
                        <div className="otheBloContent">
                            <p>Technology</p>
                            <h2>The Rise of Quantum Computing</h2>
                        </div>
                    </div>
                </div>
                <div className="comments">

                </div>
            </section>

            <Footer />

        </div>
    )
}
