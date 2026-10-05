//Step 1 : Import using require('methodNmae')

const express =    require('express') //Api Building
const cors =    require('cors')  //Share The Resouce Between Diff Add/Origin
const mongoose =    require('mongoose') //Backend-Databse Connection
const bcrypt =    require('bcrypt') //Hash the sensitive Data Like-Password
const { type } = require('node:os')

//Step 2: Create Application using express()

const app = express()

//MiddleWarre- Security Layer
app.use(express.json())
app.use(cors()) 



//Phase 1: Backend-Database Connection

//A.Connect - Local DB - mongodb:localhost:27017/Database_Name
mongoose.connect('mongodb:localhost:27017/AugustStudent')

.then( ()=>console.log('MongoDB Connected')  ) //Confirm Message

.catch( (err)=> console.log(err)  ) //Error Message


//B. Schema- BluePrint of Data Which You Want To Store 
const UserSchema   =    new   mongoose.Schema({
                //json- Object- key:value pair
                name:String,
                email:{
                    type:String,
                    unqiue:true
                },
                password:String
            })


//C. Model (Collection In MongoDB)
const User =    mongoose.model('User',UserSchema)





//Phase 2: Frontend-Backend -API(carry data)

app.get('/',(req,res)=>{
    res.send("Backend Running")
})

app.post('/register', async(req,res)=>{

    const {username , email , password}   = req.body;


})

app.post('/login', async(req,res)=>{
  
    
    const{email , password}  = req.body;
})
