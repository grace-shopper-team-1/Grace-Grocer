import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const allProducts = this.props.products
    const style = {
      textDecoration: 'none',
      color: 'black',
    }
    return (
      <div>
        <h1>Store</h1>

        <div className="products-container">
          {allProducts.map((product) => (
            <div className="product-items" key={product.id}>
              <Link style={style} to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="products-img" /> <br />
                <h3 className="product-name">{product.name}</h3>
                <p>Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
