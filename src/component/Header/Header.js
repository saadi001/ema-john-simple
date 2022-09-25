import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
     return (
          <div className='top-header'>
               <nav className='header'>
               <img src={logo} alt="" />
               <div>
                    <a href="/order">Order</a>
                    <a href="/order_review">Order review</a>
                    <a href="/Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
               </div>
          </nav>
          </div>
     );
};

export default Header;