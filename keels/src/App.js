import { Component } from 'react';

import './App.css';

class App extends Component{

  constructor(){

    super();

    this.state={
      name : 'seneth',
      job : 'se'
    
    };
  }

  render(){
    return(
      <div>
        <h1>My name is : {this.state.name}</h1>
        <h1>My career is : {this.state.job}</h1>
      
      </div>
    );
  }
}

 export default App