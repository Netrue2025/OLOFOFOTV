import "../styles/footer.css"
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

import { Link } from "react-router-dom"


export function Footer(){
    return(
        <div className="footer-container">
            
           
            <div className="footer-inset-container">
               <div className="mainFooter">
                    <div className="socialMedia">
                        <h2>Our Social Media</h2>
                        <div className="facebook sm">
                            <CiFacebook className="icon"/>
                            <h3>Facebook</h3>
                        </div>
                        <div className="tiktok sm">
                            <FaTiktok className="icon"/>
                            <h3>Tiktok</h3>
                        </div>
                        <div className="instagram sm">
                            <CiInstagram className="icon"/>
                            <h3>Instagram</h3>
                        </div>
                        <div className="youtube sm">
                            <CiYoutube className="icon"/>
                            <h3>Youtube</h3>
                        </div>
                    </div>
                    <div className="quickLink">
                        <h2>Quick Links</h2>
                        <div className="quickSpan">
                            <Link className="link"><span>Home</span></Link>
                            <Link className="link"><span>Blogs</span></Link>
                            <Link className="link"><span>Article</span></Link>
                            <Link className="link"><span>Sport</span></Link>
                            <Link className="link"><span>Submit a Blog/Article</span></Link>
                        </div>
                    </div>
               </div>

                {/* others */}
                <div className="others">
                    <div className="others-details">
                        <div className="terms-privacy-cookies">
                            <Link className="link"><span>Terms of service</span></Link>
                            <Link className="link"><span>Privacy policy</span></Link>
                            <Link className="link"><span>Cookies Policy</span></Link>
                            <Link className="link" to={"https://netrue.io"}><span>Developed by Netrue Ltd</span></Link>
                        </div>
                        <p>All rights reserved  2025  </p>
                    </div>


                </div>
            </div>
           
          
     
          
        </div>
    )
}