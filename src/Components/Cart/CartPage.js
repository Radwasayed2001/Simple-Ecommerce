import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';
import './CartPage.css'
function CartPage() {
    var cart = useSelector((state)=>state.productSlice.cart);
  return (
    <div id='cartpage'>
      {
            cart.map((item, index) => <Cart data={item} index={index}/>)
      }
    </div>
  )
}

export default CartPage
