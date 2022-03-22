import pizzaImg from './assets/pizza.jpg'
import cokeImg from './assets/coke.JPG'
import wingsImg from './assets/wings.png'
import Cart from './Cart';

import ItemList from './ItemList';
import react, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function App() {

  const [cart, setCart] = useState([]);
  const [store, setStore] = useState([]);

  useEffect(() => {

    const product = [
      {
        id: 1,
        name: "pizza",
        img: pizzaImg,
        addedToCart: false,
        price: 50,
        quantity: 0
      },
      {
        id: 2,
        name: "wings",
        img: wingsImg,
        addedToCart: false,
        price: 100,
        quantity: 0
      },
      {
        id: 3,
        name: "coke",
        img: cokeImg,
        addedToCart: false,
        price: 200,
        quantity: 0
      }
    ]

    const newStore = []
    newStore.push(...product)
    // console.log(newStore)
    setStore(newStore)

  }, [])



  const addToCart = (price, name, img) => {
    const inventory = [...cart]
    // console.log(inventory)

    const itemToPush = {price: price, name: name, img: img, quantity: 1 }

    const newInventory = cart.filter((item) => {
      return (
        item.name === name
      )
    })
    // console.log(newInventory)
    // console.log(inventory)

    if (newInventory.length > 0) {
      // newInventory[0].quantity += 1;

      const index = inventory.findIndex(item => {
        return item.name === newInventory[0].name
      })

      inventory[index].quantity += 1;

    } else {
      inventory.push(itemToPush)
    }
    setCart(inventory)
  }



  const handleRemove = (name, index) => {
    
    const newCart = [...cart]
    const newInventory = cart.filter((item) => {
      return (
        item.name === name
      )
    })

    const indexx = newCart.findIndex(item => {
      return item.name === newInventory[0].name
    })
    
    if (newCart[indexx].quantity > 1) {
      // newInventory[0].quantity += 1;
      

      newCart[indexx].quantity -= 1;

    } else {
      newCart.splice(index, 1)
    }

    setCart(newCart)
  }



  return (
    <div className="App">
      <h1>Rip Off Store</h1>
      <ItemList addToCart={addToCart} store={store} />
      <Cart addToCart={addToCart} handleRemove={handleRemove} cart={cart} store={store} />
    </div>
  );
}

export default App;
