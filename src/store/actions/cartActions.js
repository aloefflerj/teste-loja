import { PRODUCT_ADDED } from './actionTypes'

//Action Creators
export function adicionarProdutoAoCarrinho(novoCarrinho) {
    return {
        type: PRODUCT_ADDED,
        payload: novoCarrinho,
    }
}
