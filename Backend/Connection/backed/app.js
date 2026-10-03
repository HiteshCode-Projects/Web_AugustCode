const express =   require('express')
const cors    =   require('cors')
const { link } = require('node:fs')


const app = express()

//MiddleWare- Security

app.use(express.json())
app.use(cors())  //Enable The Cors so we can share resoucre even though having Different Port/Address 



//Api - 
app.post('/login' , (req,res)=>{

  //Data From Frontend - req.body 

  const {name , email} = req.body

  console.log(name)

  //Simple Validation

  if(name && email){

       res.json( {  message:`Welcome ${name} To My Website` } )

  }else{

    res.json( {  message:'Email and Name are required' } )
  }


})



app.listen(3000,()=>{
    console.log('Server Running http://localhost:3000')
})