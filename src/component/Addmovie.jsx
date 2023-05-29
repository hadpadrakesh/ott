import { useRef } from "react";
import {useNavigate} from 'react-router-dom'

const Addmovie = () => {

    let navigate = useNavigate()

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();


    let handleAddNewMovie =(e)=>{
        e.preventDefault()
        //create new movie object
        let newMovie={
            moviename:moviename.current.value,
            hero:hero.current.value,
            heroine:heroine.current.value,
            director : director.current.value,
            languages:[],
            genre:  genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value
        }
        
        let options = document.getElementsByName("langs");  //for languages
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push( options[i].value )
            }  
        }

              //send the movie obj to the database
        fetch(" http://localhost:4000/movies" , 
        {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(newMovie)
        })
            .then(()=>{
            alert("New movie added to database");
            navigate("/");
        })
    }

    return ( 
        <div className="addmovie">
            <h1>Add New Movie</h1><hr /><br />
            <form onSubmit={handleAddNewMovie}>
                <input id="inp" type="text" ref={moviename} placeholder="Enter Moviename" /><br/>
                <input id="inp" type="text" ref={hero} placeholder="Enter Heroname"/><br/>
                <input id="inp" type="text" ref={heroine} placeholder="Enter Heroinename"/><br/>
                <input id="inp" type="text" ref={director} placeholder="Enter Directorname"/><br/>

                <fieldset id="lang">
                    <legend><h3 id="selectlang"> Select Language</h3></legend>
                    <input type="checkbox" name="langs" value="kannada" /><label htmlFor="">Kannada</label>
                    <input type="checkbox" name="langs" value="Hindi" /><label htmlFor="">Hindi</label>
                    <input type="checkbox" name="langs" value="Tamil" /><label htmlFor="">Tamil</label>
                    <input type="checkbox" name="langs" value="Telugu" /><label htmlFor="">Telugu</label>
                    <input type="checkbox" name="langs" value="Maliyalam" /><label htmlFor="">Maliyalam</label>
                    <input type="checkbox" name="langs" value="English" /><label htmlFor="">English</label>
                </fieldset>

                <input id="inp" type="text" ref={genre} placeholder="Enter Genre"/><br/>
                <input id="inp" type="url" ref={poster} placeholder="Enter your Poster"/><br/>
                <input id="inp" type="url" ref={trailer} placeholder="Enter Movier Tralier"/><br/>
                <input id="inp" type="number" min ="1950" max="2024" ref={release} placeholder="Enter Moive release year"/><br/>
                <input id="inp" type="number"  min ="1" max="10" step="0.1" ref={rating} placeholder="Enter Rating"/><br/>
                <textarea name="Enter moovie plot" id="" cols="48" rows="6" ref={synopsis} placeholder="Enter Movie plot">Enter movie plot</textarea><br />
                <input id="inp" type="submit" value={"Add movie"}/>
            </form>
            
        </div>
     );
}
 
export default Addmovie;