const express=require('express');
const app=express()
const port=8000;
const cors=require('cors')
const user=require("./db/user")
const connectDB=require('./db/dbconnection')
connectDB();


app.use(express.json())
app.use(cors());

//post
app.post('/register',async(req,res)=>
{
    const {username,password}=req.body;
    const newuser=new user({username,password})

    const existingUser =await user.findOne({ username });
    
    if (existingUser) {
      return res.json({success:0,message:'Username already exists'});}

    newuser.save();
    res.json({success:1,message:"created successfully"})

})

app.post('/login',async(req,res)=>
{
  const {username,password}=req.body;
  const existingUser =await user.findOne({ username });
  
  if(existingUser)
  {
    if(password===existingUser.password)
      {
        res.json({success:1,message:"created successfully"})
      }

    else
    {
      res.json({success:0,message:"wrong password"})
    }
  }

  else
  {
    res.json({success:0,message:"wrong mail"})
  }
  

})


app.listen(port,()=>{
    console.log("server is running on port 8000")
})