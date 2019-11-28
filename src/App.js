import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class  App extends Component {


  state = {
    items : [

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

  // visibleMembers() {
  //   return this.items.filter(m => m.display)
  // }


  addItem = (item) =>{
    item.id= this.state.items.length+1;
    let items = this.state.items;
    items.push(item);
    this.setState({items:items})
  }

  render(){
    return(
    <div className="App container">
      <h1 className="text-center">Tod list App</h1>
      <p>Number of rows = {this.state.items.length}</p>
      <TodoItems vals_array = {this.state.items} deleteItem={this.deletItem} />
      <AddItem addItem = {this.addItem}/>
    </div>
  );

  }
}

export default App;
