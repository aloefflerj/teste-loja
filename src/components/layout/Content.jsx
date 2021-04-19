import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/Home'
import CartPage from '../../views/CartPage'

const Content = props => (
    <main className='Content'>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/cart'>
                <CartPage />
            </Route>

            <Route path='*'>
                <h1>Error 404</h1>
            </Route>
        </Switch>
    </main>
)

export default Content
