//BACKEND RULES TO WRITE CODE

//Step 1 : Import the required modules and dependencies at the top of the file. This includes Express, body-parser, and any other necessary libraries.
//Whatever is Needed to run the backend server should be imported here.

//How To Import Modules in Node.js
// use the require() function to import modules in Node.js. For example, to import the Express module, you would write:
//Syntax-    require('ModuleName');

const express =    require('express')
//Moudles will have its Own Inbuilt Functions and Properties which can be used in the code to perform various tasks.

//Step 2: Create Express Application/Function by using express() function. This will create an instance of the Express application that can be used to define routes and middleware.
const app = express()
//Help us To Build API


//MiddleWare - Security Layers


//Step 3: Building API Endpoints/ Routes  / URL - Communication Backend and Frontend

//synatx  :  app.methodName('path/Address' , function(req,res){-Task-}  )

//1. First Address using get Method : Get The DAta From Server/Backend
app.get('/', function(req,res){
res.send('Good Evening : Backend API Running')
})


//2.Another Address
app.get('/login', function(req,res){
    res.send('Good Evening Please Login')
})

//3.
app.get('/register', function(req,res){
    res.send('Good Evening Please Register')
})



//Step 4: START THE BACKEND SERVER By using app.listen()

//synatx : app.listen(PortNumber , function(){})

//portNumber - It is a Number which is used to identify the backend server - address of internte
// Example : 3000,5000, 8000, 9000 

app.listen(3000, function(){
    console.log('Backend Server Running on port http://localhost:3000')
})