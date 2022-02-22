import React from 'react'
import './Product.css'

function Product({title, price, rating, image}) {
  return (
    <div className='product'>
        <div className="product-info">
            <p>{ title }</p>
            <div className="product-price">
                ${ price }
            </div>
            <div className="product-rating">
                {Array(rating).fill().map((_ , i) => (
                    
                    <i className="fa-solid fa-star"></i>
                ))}
            </div>
        </div>
        <img src= {`${image}`} alt="product" />
        <button>Add to basket</button>
    </div>
  )
}

export default Product