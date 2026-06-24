import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

const Cart = () => {

  const state = useContext(GlobalState)
  const [cart] = state.userAPI.cart

  console.log(cart)

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Cart Empty
      </h2>
    )

  return (
    <div>
      {
        cart.map(item => (
          <div className='detail' key={item._id}>

            <img
              src={`http://localhost:5000${item.product.images}`}
              alt={item.product.title}
            />

            <div className='box-detail'>
              <div className='row'>
                <h2>{item.product.title}</h2>
                <h6>{item.product_id}</h6>
              </div>

              <span>${item.product.price}</span>

              <p>{item.product.description}</p>
              <p>Sold: {item.product.sold}</p>

              <Link to='/cart' className='cart'>
                Buy Now
              </Link>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Cart