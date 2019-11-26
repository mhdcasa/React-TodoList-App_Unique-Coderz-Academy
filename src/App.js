import React, { Component } from 'react';
import './App.css';

class  App extends Component {


  state = {
    items : [
      {id : 1, name:'Lobna', age : 22},
      {id : 2, name:'Mehdi', age : 25},
      {id : 3, name:'Aymen', age : 24},
      {id : 4, name:'Jad', age : 24},
    ]
  }



  render(){
    return(
    <div className="App">

    </div>
  );

  }
}

export default App;
