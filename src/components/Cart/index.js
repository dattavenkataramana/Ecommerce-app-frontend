
import React from 'react';
import { useProductContext } from '../CreateProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header';
import './index.css';

const Cart = () => {
  const { cartItems, setCartItems } = useProductContext();

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <> 
    <Header/>
    <div className="cart-container">
      <h2>Cart</h2>
      <p className="total-amount">Total Amount: ${calculateTotalAmount()}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
            <div className="product-details">
              <div> 
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">${item.price}</p>
              </div>
              <div> 
                <button className="delete-button" onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon className='icon-con' icon={faTrashAlt} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Cart;

