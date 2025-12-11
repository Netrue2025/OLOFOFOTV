import "../styles/sport.css"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export function Sport(){
    const [loading, setLoading] = useState(true)
    const [backend, setBackend] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("https://abiwrite.com/db/sport.php")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Server lost. check your server connection")
            }
            return response.json();
        })
        .then((data)=>{
            
            setBackend(data)
            console.log(data.heading)
            setLoading(false)
            
        })
        .catch((error)=>{
            // setError(error.Messages)
            setLoading(false)
        })
    
    }, [])
    const alldata = Array.from(backend)
   
    return(
        <>

            <section className="sportContainer">
                <div className="sportTitle">
                    <h1>Latest in Sport</h1>
                    <Link to={"/"} className="link">
                        <span>See All</span>
                    </Link>
                </div>
                <div className="sportCards">
                    {alldata.slice(0, 10).map((sport, index)=>(
                        <div className="card1" key={index} onClick={()=>navigate('/Read', {replace: true, state:(sport)})}>
                            <img src={`https://abiwrite.com/admin/images/${sport.image}`} alt="person playing basket ball" />
                            <h2>{sport.heading}</h2>
                            <p>{sport.categories}</p>
                        </div>
                    ))}
                    {/* <div className="card2">
                        <img src="/sport2.jpg" alt="person playing basket ball" />
                        <h2>World Cup QUalifier: Who's In?</h2>
                        <p>International Soccer News</p>
                    </div>
                    <div className="card3">
                        <img src="/sport3.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                    <div className="card4">
                        <img src="/sport1.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                    <div className="card5">
                        <img src="/sport2.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                    <div className="card6">
                        <img src="/sport3.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                    <div className="card7">
                        <img src="/sport1.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div>
                    <div className="card8">
                        <img src="/sport2.jpg" alt="person playing basket ball" />
                        <h2>Grand Slam Final: A Historic Match</h2>
                        <p>Tennis Updates</p>
                    </div> */}

                </div>
            </section>
        </>

    )
}