import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";


const Favorites = () => {

    let[favoriteMovies, setFav] = useState(null);

    useEffect(()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))   //localStorage.getItem("fav")--it is in string type --convert to js value format using json.parse
    },[])

    return ( 
        <div>   
            {favoriteMovies && <Movieslist movies = {favoriteMovies} title="Favorite movies"/>}  
        </div>
     );
}
 
export default Favorites;