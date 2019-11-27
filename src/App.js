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



  deletItem = (id) => {
    console.log(id);
    let items = this.state.items;  //hna daba 7atit dik array items f1 variable smito items
    let i = items.findIndex(item=>item.id === id); //hna daba galt lih dir boucle 3la array b dik finIndex o ligne li l9ayti item.id dyalo === dak id li dawazna lih 7ato f1  variable i
    items.splice(i,1); //supprimer liya la ligne li l9iti
    this.setState({items});



    // deuxiemme méthode de suppression
    // f had méthode kandir fonction filter li katdoz liya 3la chaque ligne o katakhod liya l id dyal chaque ligne o bine insertion o katchof wach dak id ma kaysawich id li 3tito o kaykhaliya o kay7ayad li kaysawi dak id

    // let items = this.state.items.filter(item => {
    //   return item.id != id;
    // })

    // this.setState(items);


  }


  render(){
    return(
    <div className="App">
      <h1>Tod list App</h1>
      <TodoItems vals_array = {this.state.items} deleteItem={this.deletItem} />
      <AddItem/>
    </div>
  );

  }
}

export default App;
