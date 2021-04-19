import './Home.css'
import React from 'react'
import Products from '../components/products/Products'

const Home = props => {
    return (
        <div className='Home'>
            <h1>Home</h1>
            <h2>Produtos</h2>
            <Products />
        </div>
    )
}

export default Home
