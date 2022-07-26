import React from "react";

//import '../../Styles/Navbar.css'

import {Outlet,Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar-box">
        <h1>Navigation bar</h1>
        <ul className="link-list">
            <li className="nav-link"><Link  className="Homebar-link" to='/Home'>Home</Link></li>
            <li className="nav-link"><Link  className="Homebar-link" to='/login'>Sign up</Link></li>
            <li className="nav-link"><Link  className="Homebar-link" to='/register'>Sign in</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default NavigationBar;
