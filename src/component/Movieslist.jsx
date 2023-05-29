import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({movies, title}) => {
 
    let [favId , setfavId] =useState(null);
    let[alerted , setalerted] = useState(0);

    useEffect(()=>{
      let fav = JSON.parse(localStorage.getItem("fav"));
      setfavId(fav.map((m)=>{return m.id}));                  //new arr is created and map is method is pushing movie to array
      console.log("use effect is executed");
    },[alerted])

     let Addtofav = (movie)=>{                                //when we click on heart button--it will add movie to fav-list
        let fav = JSON.parse(localStorage.getItem("fav"));    //take the previous data from localstorage//fav is key//json to js --using parse//arrat Datatype IN JS object 
        fav.push(movie);                                      //push the movies into array 
        // fav =JSON.stringify(fav);                             //convert into json format--use this step or below one
        localStorage.setItem("fav", JSON.stringify(fav)); 
        setalerted(alerted+1);                   // set back the same array to LS
        // alert("movie added to favorites list")
     }

     let removefromfav = (id)=>{                             //when we click on heart button--it will remove movie to fav-list
        let fav = JSON.parse(localStorage.getItem("fav"));    //take the previous data from localstorage//fav is key//json to js --using parse//arrat Datatype IN JS object 
        fav=fav.filter((m)=>{return m.id!=id})                                  //use filter--using callback fn --it will create new arr -- present id with LS ids and it will compare and leaving behind that obj and new array is created                          
        localStorage.setItem("fav", JSON.stringify(fav));  
        setalerted(alerted+1);                      
        // alert("movie removed from favorites list")
     }

    return ( 
        <div>

            <h1 id="box2">{title}</h1>

            <div className="movies123">
                            {movies.map((movie)=>{ 
                                return(
                                    <div key={movie.id} className="box1">
                                                                            
                                        {favId && favId.includes(movie.id)?
                                        <button className="remove-btn" onClick={()=>{removefromfav(movie.id)}}><i class='bx bxs-heart'></i></button> :
                                        <button className="add-btn" onClick={()=>{Addtofav(movie)}}><i class='bx bx-heart' style={{color:"white"}}></i></button> }
                                      
                                        <Link to={`/moviedetails/${movie.id}`} className="movielink">  
                                            <img src={movie.poster} width="250px" height="300px" />
                                            <h1>{movie.moviename}</h1>
                                            <h4>Release : {movie.release}</h4>
                                            <h4>rating : {movie.rating}</h4>
                                        </Link>
                                        
                                    </div>
                                )
                            })}
                        </div>
                        
        </div>
     );
}
 
export default Movieslist;








