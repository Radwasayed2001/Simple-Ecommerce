import { useSelector } from 'react-redux';
import './Nav.css';
import { NavLink } from "react-router-dom";
function Nav () {
    var cart = useSelector((state)=>state.productSlice.cart);
    return(
        <div id='nav'>
            <div id='logo'>Logo</div>
            <ul>
                
                <li><NavLink className="nav-link" aria-current="page" to="Todo">Home</NavLink></li>
                <li><NavLink className="nav-link" to="products">Products</NavLink></li>
                <li><NavLink className="nav-link" to="login">Login</NavLink></li>
                <li><NavLink className="nav-link" to="register">Register</NavLink></li>
                <li><NavLink className="nav-link number" style={{color:'red', position:'absolute'}} >{cart.length}</NavLink></li>
                <li><NavLink className="nav-link" ><img src='https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png' style={{width:'30px'}}/></NavLink></li>
                <li><NavLink className="nav-link" to="cart">Cart</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;