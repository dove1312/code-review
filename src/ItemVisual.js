import react from 'react';
import pizzaImg from './assets/pizza.jpg'


function ItemVisual (props){

    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.img} alt="" />
            <p>${props.price}</p>
            <button onClick={()=>props.addToCart(props.price, props.name, props.img)}>add to cart</button>
        </div>
    )
}

export default ItemVisual;