import { useEffect, useState, useRef } from "react";
import pizzaImg from './assets/pizza.jpg'


function Cart(props) {



    const sideBarRef = useRef()

    const handleClickCartIcon = (e) => {
        console.log(sideBarRef)
        if (sideBarRef.current.style.display === '' || sideBarRef.current.style.display === 'none') {
            sideBarRef.current.style.display = 'unset'
        } else {
            sideBarRef.current.style.display = 'none'
        }
    }

    console.log(props.cart)

    const arrayOfPrice = props.cart.map((data)=>{
        return data.price
    })
    // console.log(arrayOfPrice)

    const arrayOfQuantity = props.cart.map((data)=>{
        return data.quantity
    })
    // console.log(arrayOfQuantity[0])

    return (<>
        <div onClick={handleClickCartIcon} className="cartIcon">cart</div>
        <div ref={sideBarRef} className="sideBar">
            <h2>Your cart</h2>
            {props.cart.map((data, index) => {
                return (<div>
                    <p>{data.name}</p>
                    <div className="individualItemContainer">

                        <img className="cartImg" src={data.img} alt="" />
                        <button class="removeButton" onClick={() => { props.handleRemove(data.name, index) }}>-</button>
                        <span>x{data.quantity}</span>
                        <button onClick={() => { props.addToCart(data.price, data.name, data.img) }}>+</button>
                    </div>
                    <p>${data.price * data.quantity}</p>
                </div>
                )
            })}
            
            <p class="total">your total: ${(arrayOfPrice[0]*arrayOfQuantity[0]||0)+(arrayOfPrice[1]*arrayOfQuantity[1]||0)+(arrayOfPrice[2]*arrayOfQuantity[2]||0)}</p>

            <button>Checkout</button>
        </div>
    </>

    )
}

export default Cart;