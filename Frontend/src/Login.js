import React, { useState } from 'react'
import axios from 'axios';
function Registration() {

  const [state,updatestate]=useState("");
  const [state2,updatestate2]=useState("");
  async function handlesubmit(e)
  {
    e.preventDefault();
    const data={username:state,password:state2};
    const response = await axios.post('http://127.0.0.1:8000/login', data);
    console.log(response.data);
    const {success,message}=response.data;
   
    if(success)
    {
      console.log("success");
    }

    else
    {
      console.log(message);
    }

    updatestate("");
    updatestate2("");
  }

  return (
    <div>

      <div>

        <h1>Login:</h1>
        <form onSubmit={handlesubmit}>
       <br></br>
       <label>Enter Email : <input type="text" value={state} onChange={(e)=>updatestate(e.target.value)}></input></label><br></br><br></br>

       <label>Enter Password : <input type="password" value={state2} onChange={(e)=>updatestate2(e.target.value)}></input></label> <br></br><br></br>
      
       <input type='submit' value="Login" />
       </form>
       <br></br><br></br>
       Create New Account ? <a href='/register'> Register</a>
      </div>


    </div>
  )
}

export default Registration