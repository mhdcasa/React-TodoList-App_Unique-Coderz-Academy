import React from 'react';
import './TodoItems.css'



const TodoItems = (props) =>{   //(props) hadi kandirha wast fonction bach njib props dial had component(TodoItems) mn autre componenst(App.js)

        const {vals_array} = props; //val_array le nom dyal props li kayn f l'autre component f had l'exempls 3andna howa App.js
        const {deleteItem} = props;

        let lengeur_array = vals_array.length;
       
            const  ListeItems = lengeur_array ? (
            vals_array.map( val =>{
                return (
                    <div key={val.id}>
                        <span>{val.name}</span>
                        <span>{val.age}</span>
                        {/* <span onClick={deleteItem(val.id)}>x</span>comme ca fonction ka it2éxécuta rasha pour éviter foction tdir execution tout seule kanzid arrow function */}
                        <span onClick={()=>deleteItem(val.id)}>x</span> 
                        {/* {()=>deleteItem(val.id)} Had kitaba kat3ni dart 1 fonction sans nom o bien renommage o hadik lfonction li sans nom ghada tdir liya run l fonction deleteItem*/}
                    </div>
                )

            })
            ):(
                <p>There is no item to show</p>
            )

       
       
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