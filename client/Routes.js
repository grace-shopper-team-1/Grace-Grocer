import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home'
import { me } from './store'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import AllUsers from './components/AllUsers'
import MyAccount from './components/MyAccount'
import Homepage from './components/Homepage'
import Sidebar from './components/Sidebar'
import Cart from './components/Cart'
import ProductForm from './components/ProductForm'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import GuestCart from './components/GuestCart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div className={isLoggedIn ? 'grid' : null}>
        {isLoggedIn ? <Sidebar /> : null}
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/thankyou" component={OrderConfirmation} />
            <Route path="/users/:userId/cart" component={Cart} />
            <Route path="/users/:userId/checkout" component={Checkout} />
            <Route path="/users" component={AllUsers} />
            <Route path="/home" component={Home} />
            <Route path="/products/:productId/edit" component={ProductForm} />
            <Route path="/products/add" component={ProductForm} />
            <Route
              exact
              path="/products/:productId"
              component={SingleProduct}
            />
            <Route path="/products" component={AllProducts} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/products/:productId" component={SingleProduct} />
            <Route path="/products" component={AllProducts} />
            <Route path="/cart" component={GuestCart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thankyou" component={OrderConfirmation} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    },
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
