import React from "react";  
import './App.css'

function App(){

let username = "John";


function Greet(){
  alert('Hii Guys')
}

return(
  //HTML
  //REACT CLOSE ALL THE HTML TAG
  // <Tag Name-Input /Img /br />

  <div className="app">
    <nav>
      <ul>
        <li>Home</li>
        <li>Support</li>
      </ul>
    </nav>

    <h1 className="head">This is React Session</h1>

    <h2>My Name is : {username} </h2>

    <p>Good Evening</p>

    <button onClick={Greet}>Greet</button>

    <input  type="text" placeholder="Enter Your name" />


  </div>
)

}

export default App