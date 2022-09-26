import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
     const [products, setProduct] = useState([]);
     
     
     useEffect(() =>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProduct(data))
     },[]);
     const addToCart = (product) => {
          console.log(product);
     };
     return (
          <div className='shop-container'>
               <div className="products-container">
                    {
                         products.map(product => <Product 
                         product={product}
                         key = {product.id}
                         addToCart = {addToCart}
                         ></Product>)
                    }
               </div>
               <div className="cart-container">
                    <h4>This is for cart</h4>
               </div>
          </div>
     );
};

export default Shop;