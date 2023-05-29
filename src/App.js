
// import Addmovie from "./component/Addmovie";
// import Home from "./component/Home";
// import Moviedetails from "./component/Moviedetails";
// import Navbar from "./component/Navbar";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Favorites from "./component/Favorites";
// import Search from "./component/Search";
// import Updatemovie from "./component/Updatemovie";

import Parent from "./Spotify/Parent";

// import Navbar1 from "./Spotify/Navbar1";

// import Addproducts from "./Assignment/Addproducts";
// import Navpage from "./Assignment/Navpage";
// import Products from "./Assignment/Product";
// import Products from "./Assignment/Productdetails";
//  import {BrowserRouter, Routes, Route} from 'react-router-dom'



// !Movie

// function app()
// {
//     return(
//       <BrowserRouter>
//         <div className="App">
//           <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home/>}/>      
//             <Route path="/add" element={<Addmovie/>}/>
//             <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
//             <Route path="/fav" element={<Favorites/>}/>
//             <Route path="/search/:searchword" element={<Search/>}/> 
//             <Route path="/update/:id" element={<Updatemovie/>}/>      
//           </Routes>
          
//         </div>
//         </BrowserRouter>
       
//     )
// }
// export default app;


// //!product
// function app()
// {
//     return (
//       <BrowserRouter>
//         <div className="app">
          
//           <Navpage/>
//           <Routes>
//           <Route path="/" element={<Products/>}/>
//           <Route path="/add" element={<Addproducts/>}/>
//           <Route path="/productdetails/:id" element={<Productdetails/>}/>
//          </Routes>
          
        
//         </div>
//         </BrowserRouter>
//     )
// }
// export default app;

//!Spotify
// function app ()
// {
//     return (

//       <div className="app">

//          <Navbar1/>

//       </div>
//     )
// }
// export default app;

function app ()
{
    return (

      <div className="app">

      <Parent/>

      </div>
    )
}
export default app;