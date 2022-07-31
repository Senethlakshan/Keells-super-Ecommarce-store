import React from 'react'
import {Link,Route,Routes } from 'react-router-dom'

import '../../Styles/Homepage.css'
import Signup from '../../Auth/signup'

const Homepage = () => {
  return (
   <div>
    <h1>home</h1>
   <div>
   <ul>
   <li className="nav-link"><Link  className="Homebar-link" to='register'>Sign up</Link></li>
   </ul>
   </div>
   <div>
   <Routes>
   <Route path="register" element={<Signup />} />
  </Routes>
   </div>


   </div>
       
        
        
   
  )
}

export default Homepage