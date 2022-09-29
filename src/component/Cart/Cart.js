import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
     // console.log(cart);
     let price = 0;
     let shipping =0;
     for(const product of cart){
          price = price + product.price;
          shipping = shipping + product.shipping;
     }
     const tax = parseFloat((price * .1).toFixed(3));
     const grandTotal= price + shipping + tax;
     return (
          <div className='cart'>
               <h4>Order Summary</h4>
               <p>Item added: {cart.length}</p>
               <p>Total price: {price}</p>
               <p>Total shipping: {shipping}</p>
               <p>Tax: {tax}</p>
               <h4>Grand Total: {grandTotal}</h4>

          </div>
     );
};

export default Cart;