import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'
import BtnRender from './BtnRender'

const ProductList = ({ product, isAdmin }) => {

  const state = useContext(GlobalState)
  const handleCheck = state.productsAPI.handleCheck

  return (
    <div className='product_card'>

      {/* ✅ Admin Checkbox */}
      {
        isAdmin && (
          <input
            type='checkbox'
            checked={product.checked || false}
            onChange={() => handleCheck(product._id)}
          />
        )
      }

      {/* ✅ Product Image */}
      <img 
        src={`http://localhost:5000${product.images}`} 
        alt={product.title}
      />

      {/* ✅ Product Info */}
      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      {/* ✅ Buttons (Edit/Delete/View) */}
      <BtnRender product={product} />

    </div>
  )
}

export default ProductList