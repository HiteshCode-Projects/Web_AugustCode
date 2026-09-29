// //Example 1 - without Nav

// // import React from "react";
// // //Basic Setup React Router Dom
// // import {BrowserRouter ,Routes , Route} from "react-router-dom"

// // //Home Page - 1  /
// // function Home(){
// // return(
// //   <div>
// //     <h2>Home Page - File</h2>
// //   </div>
// // )
// // }

// // //About Page-2
// // function About(){
// //   return(
// //     <div>
// //       <h2>About Page - File</h2>
// //     </div>
// //   )

// // }

// // //404-Page Not Found
// // function PageNotFound(){
// //   return(
// //     <div>
// //       <h2>404 - Page Not Found</h2>
// //     </div>
// //   )
// // }

// // function App(){

// // return(
// //   <BrowserRouter>
        
// //         <Routes>

// //         <Route path="/"  element= { <Home />}   />
// //         <Route path="/about" element = { <About /> } />

// //          <Route path="*" element = { <PageNotFound /> } />

// //         </Routes>

  
// //   </BrowserRouter>
// // )

// // }
// // export default App


// //Navigation Bar
// import React from "react";
// //Basic Setup React Router Dom
// //Link - Act as Anchor Tag in HTML
// import {BrowserRouter ,Routes , Route, Link  } from "react-router-dom"

// //Home Page - 1  /
// function Home(){
// return(
//   <div>
//     <h2>Home Page - File</h2>
//   </div>
// )
// }

// //About Page-2
// function About(){
//   return(
//     <div>
//       <h2>About Page - File</h2>
//     </div>
//   )

// }

// //404-Page Not Found
// function PageNotFound(){
//   return(
//     <div>
//       <h2>404 - Page Not Found</h2>
//     </div>
//   )
// }

// function App(){

// return(
//   <BrowserRouter>
          
//           <nav>
//             <Link to="/" >  Home Menu </Link> ||
//             <Link to="/about" > About Page </Link>
//           </nav>



        
//         <Routes>

//         <Route path="/"  element= { <Home />}   />
//         <Route path="/about" element = { <About /> } />

//          <Route path="*" element = { <PageNotFound /> } />

//         </Routes>

  
//   </BrowserRouter>
// )

// }
// export default App



//Example Mini Project
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";


function App(){
  return(
    <BrowserRouter>

    <Navbar />

    
    <Routes>
        <Route  path="/"  element={ <Home /> }            />
        <Route path="/dashboard" element={<Dashboard />}     />
        <Route path="profile"    element={<Profile />}      />
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App