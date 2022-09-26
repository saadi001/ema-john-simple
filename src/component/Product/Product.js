import React from 'react';
import './Product.css';

const Product = (props) => {
     // console.log(props.product.price)
     const { img, name, seller, ratings, price } = props.product;
     

     return (
          <div className='product'>
               <img src={img} alt="" />
               <div className='description'>
                    <h3>{name}</h3>
                    <h5>Price: {price}</h5>
                    <p>Seller: {seller}</p>
                    <p>Ratings: {ratings}</p>
                    <br /><br />


               </div>
               <button onClick={()=> props.addToCart(props.product)}>Add to cart</button>
          </div>
     );
};

export default Product;