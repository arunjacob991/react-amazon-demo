import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="banner">
            <div className="shady"></div>
        </div>
        <div className="home-row">
            <Product />
            <Product />
            
        </div>
        <div className="home-row">
            <Product />
            <Product />
            <Product />
        </div>
        <div className="home-row">
             <Product />
       
        </div>

    </div>
  )
}

export default Home