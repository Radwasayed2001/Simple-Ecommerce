import React from 'react'
import './Cart.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/productSlice';
function Cart({data , index}) {
    var dispatch = useDispatch();
     let newPrice = Math.round(data.price - data.price * (data.discountPercentage/100));
    function remove() {
      dispatch(removeFromCart(index));
    }
    
  return (
    <div id='cart'>
       <div id='myImage'>
        <img src={data.thumbnail} alt='myproduct'/>
      </div>
    <div id='content'>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <h3 id='price'><span>${newPrice}</span>{data.price}</h3>
    </div>
    <button onClick={()=>{remove()}}>Remove</button> 
    </div>
  )
}

export default Cart
