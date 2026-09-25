// import React from "react";

// function App(){

//   let count = 10

//   function IncreaseCount(){
//     count = count + 1
//     console.log(count)
//   }

//   return(
//         <div>
//          <h2>Like/Cart :  {count}  </h2>
//          <button onClick={IncreaseCount}>Increase</button>
//         </div>
//   )
// }

// export default App


//useState()   -Hook In React
// It is SPECAIL React Variable - It Will Store The Updated Vaue and Also It will Update That Data/Value on UI-Screen

//Synatx -  const [MainVariableName- Show on your Screen, setVaribaleName-Updated Value] = useState(Inital value)

 // import React, { useState } from "react";
// import { useState } from "react";

// function App(){

//   const [like,setLike] = useState(17)


//   function IncreaseLike(){
//       setLike(like + 1)

//       console.log(like)    
//   }
 

//   return(
//         <div>
//          <h2>Like/Cart :  {like}  </h2>
//          <button onClick={IncreaseLike}>Increase</button>
//         </div>
//   )
// }

// export default App



//Example 3 - 
// import React from "react";
// import { useState } from "react";

// function App(){

//  const [show,setShow] = useState(false)


//   return(
//         <div>
//         <input type={show ? "text" : "password"     } placeholder="Enter Password" />
//         <button onClick={ ()=>   setShow(!show)  }  >Show/Hide</button>
//         </div>
//   )
// }

// export default App

//Example 4 - Follow Button

// import React from "react";
// import { useState } from "react";

// function App(){

//  const [follow , setFollow] = useState(false)


//   return(
//         <div>
//            <button onClick={ ()=>   setFollow(!follow) }> {follow ? "Following" : "Follow"}  </button>
//         </div>
//   )
// }

// export default App
