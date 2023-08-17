import { addToCart } from '../../Redux/Slices/productSlice';
import './Card.css';
import { useDispatch } from 'react-redux';
function Card(props) {
        let product = props.product;
        const dispatch = useDispatch();
        let newPrice = Math.round(product.price - product.price * (product.discountPercentage/100));
        function add() {
            dispatch(addToCart(product));
        }
        return(
        <div id="productCard">
            <img src={product.thumbnail} alt={product.id}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div id="price">
            <h3 style={{textDecoration:'line-through'}}>${product.price}</h3>
            <h3>${newPrice}</h3>
            </div>
            <button onClick={()=>{add()}}>Add To Cart</button>
        </div>
    )
}
export default Card;