import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./Login";

import Registration from './Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
 
 <BrowserRouter>
 <Routes>

   <Route path='/register' element={<Registration />}/>

  
   <Route path="/login" element={<Login />}/>



   



 </Routes>
 </BrowserRouter>
 </>
);


