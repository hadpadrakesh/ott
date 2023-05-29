import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Relevant from "./Relevant";


const Moviedetails = () => {

    let{id} = useParams();
    let navigate = useNavigate();
    let[movie, setmovie] = useState(null);
    let[error, setError] = useState(null);
    let[pending, setPending] = useState(true);

    let [displayUpdatebox , setdisplayUpdatetbox] = useState(false);

    useEffect(()=>{
            setmovie(null);
            setPending(true);

        setTimeout(()=>{
            fetch(" http://localhost:4000/movies/"+ id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovie(data);
                setPending(false);
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 1000)
    } , [id])

    let deleteMovie =()=>{
            fetch(" http://localhost:4000/movies/"+ id , {method : "DELETE"})
            .then(()=>{navigate("/")})
    }

    return (
      
        <div>
            <h1>Watch Complete Movie</h1>

            {pending==true && <h1>Loading....</h1>}

            {error && <h1> {error}</h1>}

            {movie && <div className="movie-details">
                       <img src={movie.poster} alt="poster" />
                       <h1>Movie :{movie.moviename}</h1>
                       <h2>Actor :{movie.hero}</h2>
                       <h3> Director : {movie.director}</h3>
                       <p>Languages : {movie.languages.join(" ,")}</p>
                       <p>Genere : {movie.genre}</p>
                       <p>Synopsis : {movie.synopsis}</p>
                       <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                       <button onClick={deleteMovie}>Delete</button>

                       <Link to={`/update/${id}`}><button> Update</button></Link>
                       
                    </div>}

            {movie && <Relevant genre={movie.genre}/>}        
            
        </div>
     );
}
 
export default Moviedetails;





