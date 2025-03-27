import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../public/cart.css"; // Import CSS file

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (name, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.Name === name ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeItem = (name) => {
    const updatedCart = cartItems.filter((item) => item.Name !== name);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity,
    0
  );

  return (
    <div>

    <div className="cart-container">
    <h2 className="cart-title">🛒 Your Shopping Cart</h2>


      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="shop-btn" onClick={() => navigate("/Home")}>
            🛍 Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.imgurl} alt={item.Name} className="cart-item-img" />
                <div className="item-info">
                  <p className="item-name">{item.Name}</p>
                  <p className="item-price">{item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.Name, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.Name, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.Name)}>Remove</button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <p className="total-price">Total: ₹{totalPrice.toLocaleString()}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Cart;
