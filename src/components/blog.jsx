import "../styles/blog.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import DOMPurify from "dompurify";

export function Blog(){
    const navigate = useNavigate();
    const [backend, setBackend] = useState("");

    useEffect(()=>{
      fetch("https://abiwrite.com/db/blog.php")
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
        <div>
            <section className="blogContainer">
                <h1>From Our Blog</h1>
                {alldata.slice(0, 10).map((blog, index)=>(
                    <article key={index} onClick={()=>navigate('/Read', {replace: true, state:(blog)})}>
                        <figure>
                            <img src={`https://abiwrite.com/admin/images/${blog.image}`} alt="person playing basket ball" />
                        </figure>
                        <div className="articleContent">
                            <h2>{blog.heading}</h2>
                            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.body)}} />
                            <span>Lifestyle • {blog.date}</span>
                        </div>
                    </article>
                ))}
                {/* <article>
                    <figure>
                        <img src="/blogimage2.jpg" alt="Fruit image" />
                    </figure>
                    <div className="articleContent">
                        <h2>The Beginner's Guide to Meal Prepping</h2>
                        <p>Save time and eat healthier by planning your meals for the week ahead.</p>
                        <span>Health & Wellness • 8 min read</span>
                    </div>
                </article>
                <Link className="link" to="/Read">
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
                </Link> */}
            </section>
            
        </div>
    )
}