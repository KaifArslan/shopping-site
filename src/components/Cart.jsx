import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { cartContext } from '../App.js';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { cart, setCart } = useContext(cartContext);

  function cartIncrement(id) {
    setCart((prev) => {
      return {
        ...prev,
        [id]: prev[id] + 1,
      };
    });
  }
  function cartDecrement(id) {
    setCart((prev) => {
      if (prev[id] <= 1) {
        return removeFromCart(id)(prev);
      } else {
        return {
          ...prev,
          [id]: prev[id] - 1,
        };
      }
    });
  }
  function numberChanger(id, e) {
    setCart((prev) => {
      return {
        ...prev,
        [id]: e.target.value,
      };
    });
  }
  function removeFromCart(id) {
    return (prev) => {
      const rest = { ...prev };
      delete rest[id];
      return rest;
    };
  }

  const [price, setPrice] = useState(0);

  // useEffect hook with props.content as dependency
  useEffect(() => {
    if (Array.isArray(props.content) && props.content.length > 0) {
      // this is need to deal asyncronous errors
      function priceCalculator() {
        let totalPrice = 0;
        for (let key in cart) {
          totalPrice += cart[key] * getPrice(key);
        }

        setPrice(Number(totalPrice).toFixed(2));
      }

      priceCalculator();
    }
  }, [props.content, cart]);

  function getPrice(key) {
    const value = props.content.find((elem) => elem.id == key);
    return value.price;
  }

  const display = props.content.map((elem) => {
    if (cart.hasOwnProperty(elem.id)) {
      return (
        <div className="cart-card" key={elem.id}>
          <Link to={`/product/${elem.id}`}>
            <img className="cart-image" src={elem.image} alt="img" />
          </Link>
          <div className="side-cart-item">
            <Link>
              <p className="card-title"> {elem.title}</p>
            </Link>
            <p className="card-price">Price: ${elem.price}</p>

            <div className="product-counter">
              <button
                className="reduceProduct add-cart"
                onClick={(e) => cartDecrement(elem.id, e)}
              > 
                -
              </button>
              <input
                className="quantityProduct add-cart"
                onChange={(e) => numberChanger(elem.id, e)}
                value={cart[elem.id]}
                name="numberInput"
                type="number"
              />
              <button
                className="incrementProduct add-cart"
                onClick={(e) => cartIncrement(elem.id, e)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="cart-page">
      <div className="cart">{display}</div>
      <p className="price">Total Price ${price}</p>
      <button
        onClick={() =>
          alert(
            'This is a project to show mostly frontend skills. However, I can make it a full fledged working Website as well'
          )
        }
        className="checkout"
      >
        <i class="fas fa-shopping-cart"></i> Checkout
      </button>
    </div>
  );
};

export default Cart;
