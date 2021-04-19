import './Products.css'
import React, { Component } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const URL = 'http://mercado-api-mobile.herokuapp.com/produtos'

class Products extends Component {
    constructor(props) {
        super(props)

        this.renderProducts = this.renderProducts.bind(this)
        this.state = { products: [] }

        this.callProducts = this.callProducts.bind(this)
    }

    componentDidMount() {
        this.callProducts()
    }

    callProducts() {
        axios.get(URL).then(resp => this.setState({ products: resp.data }))
    }

    renderProducts() {
        return this.state.products.map(product => (
            <ProductCard
                id={product.id}
                img={product.img}
                key={product.id}
                nome={product.nome}
                preco={+product.preco}
            />
        ))
    }

    render() {
        return (
            <section className='Products'>
                {this.renderProducts()}
                {/* <ProductCard nome='Banana Caturra kg' preco={+1.89} /> */}
            </section>
        )
    }
}

export default Products
