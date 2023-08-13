import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../App.js';

export default function Product(props) {
  const elem = props.content;
  const { cart, setCart } = useContext(cartContext);
  const { productId } = useParams();
  const pro = elem.map((loop) => {
    if (loop.id == productId) {
      return (
        <main className="product" key={productId}>
          <img className="product-image" src={`${loop.image}`} alt="page not found " />
          <div className='product-description'>
          <h1 className='product-title'>{loop.title}</h1>
          <p className='description'><span className='features'>Features:</span> {loop.description}</p>
          <p className='card-price' >Price: ${loop.price}</p>
          <button className='add-cart' onClick={()=>cartChanger()}>
      {cart[productId]?`Add to Cart (${cart[productId]})`:'Add to Cart'}
      </button> 
      </div>
        </main>
      );
    }
  });

  function cartChanger() {
    setCart((prev) => {
      return {
        ...prev,
        [productId]: prev[productId] ? prev[productId] + 1 : 1,
      };
    });
  }

  return pro;
}
