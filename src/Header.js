import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <h1>AMAZON</h1>
        <div className='search-container'>
            <input type="text" className='header-search' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="header-options">
            <div className="sign-in">
                Hello, sign-in
            </div>
            <div className="return-order">
                Return Order
            </div>
            <div className="prime">
                Your Prime
            </div>
            <div className="cart-basket">
                 <i className="fa-solid fa-cart-arrow-down"></i>
                 <span>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header