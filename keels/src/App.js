import { Component } from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";

import NavigationBar from './Components/Navigation/NavigationBar';
import Homepage from './Components/Homepage/Homepage';
import Signin from './Auth/signin';
import Signup from './Auth/signup';


class App extends Component{



  render(){
    return(
     <Routes>
       <Route path="/" element={<NavigationBar/>} >
       <Route path="/Home" element={<Homepage />} />
       <Route path="/login" element={<Signin />} >
       <Route path=":invoiceId" element={<Signin />} />
       </Route>
       <Route path="/register" element={<Signup />} />
       <Route path="*" element={<p> there is a nothing here ! </p>} />
      </Route>
      
     </Routes>
    );
  }
}

 export default App

 /* <Route path="/Home" element={<Homepage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
 */ 