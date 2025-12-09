import "../styles/footer.css"

import { Link } from "react-router-dom"


export function Footer(){
    return(
        <div className="footer-container">
            
           
            <div className="footer-inset-container">
                {/* Details main container */}


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