import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider'

function App() {
  const [cartDisplay, setCartDisplay] = useState(false)
  console.log(cartDisplay)

  function cartHandler(event) {
    setCartDisplay(event)
  }

  return (
    <CartProvider>
      {cartDisplay && <Cart handleCart={cartHandler}/>}
      <Header handleCart={cartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
