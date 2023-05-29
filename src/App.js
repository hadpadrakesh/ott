
import Addmovie from "./component/Addmovie";
import Home from "./component/Home";
import Moviedetails from "./component/Moviedetails";
import Navbar from "./component/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favorites from "./component/Favorites";
import Search from "./component/Search";
import Updatemovie from "./component/Updatemovie";




function app()
{
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>      
            <Route path="/add" element={<Addmovie/>}/>
            <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
            <Route path="/fav" element={<Favorites/>}/>
            <Route path="/search/:searchword" element={<Search/>}/> 
            <Route path="/update/:id" element={<Updatemovie/>}/>      
          </Routes>
          
        </div>
        </BrowserRouter>
       
    )
}
export default app;



