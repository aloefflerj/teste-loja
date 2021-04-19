import './ProductCard.css'
import React from 'react'
import { connect } from 'react-redux'
import { adicionarProdutoAoCarrinho } from '../../store/actions/cartActions'

const ProductCard = props => {
    const { cart } = props

    const URL = 'http://'

    return (
        <div className='ProductCard'>
            <img src={`${URL}${props.img}`} alt='' />
            <h3>{props.nome}</h3>
            <p>R$ {props.preco}</p>
            <button onClick={e => props.adicionarAoCarrinho(+props.id)}>
                +
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        adicionarAoCarrinho(novoCarrinho) {
            const action = adicionarProdutoAoCarrinho(novoCarrinho)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
