import './CartPage.css'
import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/products/ProductCard'

const CartPage = props => {
    const { cart } = props
    console.log(cart)
    return (
        <section className='cart'>
            <h1>Cart</h1>
            <p>{cart}</p>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps)(CartPage)
