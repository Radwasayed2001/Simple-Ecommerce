import { useEffect, useState } from 'react';
import './Products.css';
import axios from 'axios';
import Card from '../productCard/Card';
function Products() {
    var [products,setProducts] = useState([]);
    let uniquecatogories;
    let categories;
    useEffect(()=>{
        getData();
    },[])
    async function getData() {
        var res = await axios.get('https://dummyjson.com/products');
        products=setProducts([...res.data.products]);
    }
    uniquecatogories = products.map((item,index)=>{
        return item.category;
    })
     categories = [...new Set(uniquecatogories)];
    const [sortingOption, setSortingOption] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const sortedProducts = [...products].sort((a, b) => {
        if (sortingOption === 'lowToHigh') {
          return a.price - b.price;
        } else if (sortingOption === 'highToLow') {
          return b.price - a.price;
        }
        return 0;
      });
      const filteredProducts = selectedCategory
    ? sortedProducts.filter(product => product.category === selectedCategory)
    : sortedProducts;
    return(
        <div id='home'>
            <div className='head'>
      {/* Sort dropdown */}
      <select value={sortingOption} onChange={e => setSortingOption(e.target.value) }>
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      {/* Category filter */}
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {
            categories.map((item)=>{
                return <option>{item}</option>
            }
            )
            
        }
      </select>
      </div>
            <div id='mycard'>
            {
                filteredProducts.map(product => (
                    <Card key={product.id} product={product} />
                  ))
            }
            </div>
        </div>
    )
}

export default Products;