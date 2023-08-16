import './Card.css';
function Card(props) {
        let product = props.product;
        let newPrice = Math.round(product.price - product.price * (product.discountPercentage/100));
    return(
        <div id="productCard">
            <img src={product.images[0]} alt={product.id}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div id="price">
            <h3 style={{textDecoration:'line-through'}}>${product.price}</h3>
            <h3>${newPrice}</h3>
            </div>
        </div>
    )
}
export default Card;