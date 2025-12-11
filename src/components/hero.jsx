import "../styles/hero.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import DOMPurify from "dompurify";
import { Background } from "./background";

export function Hero() {
        const [backend, setBackend] = useState("");
        const navigate = useNavigate();

        useEffect(()=>{
            fetch("https://abiwrite.com/db/featurePost.php")
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Server lost. check your server connection")
                }
                return response.json();
            })
            .then((data)=>{
                
                setBackend(data)
                console.log(data.heading)
                // setLoading(false)
                
            })
            .catch((error)=>{
                // setError(error.Messages)
                // setLoading(false)
            })
        
        }, [])
        const alldata = Array.from(backend)
    return(
        <div>
            <Swiper 
              modules={[Navigation, Autoplay, Pagination]}
            //   navigation                // ← arrows enabled
              autoplay={{
                delay: 3500,            // ← slide every 3 seconds
                disableOnInteraction: false,
              }}
              loop={true}               // ← infinite loop
            //   pagination={{ clickable: true }} // optional dots
              className="swipper"
            >
                {alldata.slice(0, 5).map((sport, index)=>(
                <SwiperSlide className="swiperslider" key={index}>
                    <section className="heroContainer" >
                        <figure className="figure">
                           
                            <img src={`https://abiwrite.com/admin/images/${sport.image}`} alt="person playing basket ball" />
                        </figure>
                        <div className="hero-content">
                            
                            <span>Trending</span>
                            <h2 onClick={()=>navigate('/Read', {replace: true, state:(sport)})}>{sport.heading}</h2>
                            <p className="p" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(sport.heading)}} onClick={()=>navigate('/Read', {replace: true, state:(sport)})} />
                            <button>Read More</button>
                        </div> 
                    </section>
                </SwiperSlide>
                ))}
               
           </Swiper>
        </div>
    )
}
