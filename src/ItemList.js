import { useEffect, useState } from "react";
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import ItemVisual from "./ItemVisual";
import pizzaImg from './assets/pizza.jpg'



function ItemList(props) {

    return (
        <div className="itemContainer">
            {props.store.map((item)=>{
                return(
                    <ItemVisual addToCart={props.addToCart} id={item.id} name={item.name} img={item.img} price={item.price} />
                )
            })}
        </div>
    )
}


export default ItemList;


