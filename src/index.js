import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'

import { Provider } from 'react-redux'
import configStore from './store/storeConfig'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
