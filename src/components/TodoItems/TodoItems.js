import React from 'react';
import './TodoItems.css'



const TodoItems = (props) =>{   //(props) hadi kandirha wast fonction bach njib props dial had component(TodoItems) mn autre componenst(App.js)

        const {vals_array} = props; //val_array le nom dyal props li kayn f l'autre component f had l'exempls 3andna howa App.js
       
            const  ListeItems = vals_array.map( val =>{

                return (
                    <div key={val.id}>
                        <span>{val.name}</span>
                        <span>{val.age}</span>
                        <span>x</span>
                    </div>
                )

            })
       
       
         console.log(props);

    return (

        <div className="liste_item_tale">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>

            {ListeItems}
        </div>

    )

}

export default TodoItems;

// 7na f had todoItems ma ghadich n7taj state docn ghadi ndir fonction UnlessState