import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";


const Search = () => {

  let{searchword} = useParams();
  let[movies, setmovies] = useState(null);
  let[error, setError] = useState(null);
  let[pending, setPending] = useState(true);

    useEffect(()=>{
        setmovies(null);
        setPending(true);
        
        setTimeout(()=>{
            fetch(" http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{

              let d =data.filter((m)=>{
                return(m.moviename.toLowerCase().startsWith(searchword.toLowerCase())) ||
                (m.genre.toLowerCase()===searchword.toLowerCase())  ||
                (m.languages.includes(searchword)) ||
                (m.release==searchword)  ||
                (m.hero.toLowerCase().includes(searchword.toLowerCase()))
              })

                setmovies(d);
                setPending(false);
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 1000)
    } , [searchword])


    return ( 
      
        <div> 

            {pending=== true && <h1>Loading.......</h1>} 
            {movies && <Movieslist movies={movies}  title="Search result" />}

        </div>
     );
}
 
export default Search;
