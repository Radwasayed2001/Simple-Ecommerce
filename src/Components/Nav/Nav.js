import './Nav.css';
import { NavLink } from "react-router-dom";
function Nav () {
    return(
        <div id='nav'>
            <div id='logo'>Logo</div>
            <ul>
                
                <li><NavLink className="nav-link" aria-current="page" to="Todo">Home</NavLink></li>
                <li><NavLink className="nav-link" to="products">Products</NavLink></li>
                <li><NavLink className="nav-link" to="login">Login</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;