import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {

    state = {
        name: '',
        age: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (evnet) =>{
        evnet.preventDefault();
        console.log(this.state);
        this.props.addItem(this.state);
        this.setState({
            name:'',
            age:''
        })
    }

    

    render() {
        return (
            <div className="form_add_item">

                {/* <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1> */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name ..." id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter age ..." id="age" onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="Add" />
                </form>

            </div>
        )

    }
}


export default AddItem;