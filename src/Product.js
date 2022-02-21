import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className="product-info">
            <p>The ultimate pwoli product</p>
            <div className="product-price">
                $10.00
            </div>
            <div className="product-rating">
                 <i className="fa-solid fa-star"></i>
            </div>
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" alt="product" />
        <button>Add to basket</button>
    </div>
  )
}

export default Product