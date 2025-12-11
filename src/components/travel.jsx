import { Link } from "react-router-dom";
import "../styles/travel.css";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import DOMPurify from "dompurify";

export function TravelAndTourism() {
  const navigate = useNavigate();
  const [backend, setBackend] = useState("");

  useEffect(()=>{
      fetch("https://abiwrite.com/db/travelAndTourism.php")
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

  return (
    <>
      <section className="travelAndTourismContainer">
        <div className="travelTitle">
          <h1>Travel & Tourism</h1>
          <Link to={"/"}>
            <span>See All</span>
          </Link>
        </div>
        
        <div className="travelCards">
          {alldata.slice(0, 10).map((travelandtour, index)=>(
            <div className="card" key={index} onClick={()=>navigate('/Read', {replace: true, state:(travelandtour)})}>
              <img src={`https://abiwrite.com/admin/images/${travelandtour.image}`} alt="person playing basket ball" />
              <h2>{travelandtour.heading}</h2>
              <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(travelandtour.body)}} />
            </div>
          ))}

          {/* <div className="card">
            <img src="/ballfields.jpg" alt="Hidden Ball Field" />
            <h2>A Guide to Ball's Hidden Spots</h2>
            <p>Southeast Asia Adventures</p>
          </div>
          <div className="card">
            <img src="/paris.png" alt="Paris Tower" />
            <h2>48 Hours in Paris: An Itinery</h2>
            <p>European City Breaks</p>
          </div> */}
        </div>
      </section>
    </>
  );
}
