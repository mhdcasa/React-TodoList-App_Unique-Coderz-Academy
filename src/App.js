import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
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
      <h1>Tod list App</h1>
      <TodoItems/>
      <AddItem/>
    </div>
  );

  }
}

export default App;
