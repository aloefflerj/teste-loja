import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'

const reducers = combineReducers({
    cart: cartReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
