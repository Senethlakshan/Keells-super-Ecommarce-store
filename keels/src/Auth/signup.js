import React from 'react'

import {useNavigate} from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate();

  const goHome = () => {
    navigate("/Home");
  };

  return (
    <div>
      <br/><br/>
        <h1>sign up page</h1>
        <div>
          <hr/>
          <button onClick={goHome}>Go to home page</button>
        </div>
        
        
     
    </div>
  )
}

export default Signup