import React from 'react';
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {cartContext} from '../App.js';


export default function Card(props) {

  const { cart, setCart } = useContext(cartContext);

  function cartChanger(productId) {
    setCart((prev) => {
      return {
        ...prev,
        [productId]: prev[productId] ? prev[productId] + 1 : 1,
      };
    });
  }

 const display = props.content.map((elem) => {
    return (
      <div className="card" key={elem.id}>
      <Link to={`/product/${elem.id}`}  >
        <img className="card-image" src={elem.image} alt="img" />
        <p className='card-title' > {elem.title}</p>
        <p className='card-price' >Price: ${elem.price}</p>     
      </Link>
      <button className='add-cart' onClick={()=>cartChanger(elem.id)}>
  {cart[elem.id]?`Add to Cart (${cart[elem.id]})`:'Add to Cart'}
</button>
      </div>
    );
  });

  return <div className="gallery">{display}</div>;
}
