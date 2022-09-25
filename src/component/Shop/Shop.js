import React, { useEffect, useState } from 'react';
import './Shop.css'


const Shop = () => {
     const [product, setProduct] = useState([]);
     
     useEffect(() =>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProduct(data))
     },[])
     return (
          <div className='shop-container'>
               <div className="products-container">
                    <h4>This is for products: {product.length}</h4>
               </div>
               <div className="cart-container">
                    <h4>This is for cart</h4>
               </div>
          </div>
     );
};

export default Shop;