import { PRODUCT_ADDED } from '../actions/actionTypes'

const initialState = {
    cart: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ADDED:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        default:
            return state
    }
}
