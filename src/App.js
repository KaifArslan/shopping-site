import React from 'react';
import './style.css';
import Navbar from './components/navbar.js';
import Card from './components/card.js';
import Product from './components/Product.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect ,useState} from 'react';
import Cart from './components/Cart.js'
import {createContext} from 'react'
import About from './components/About.js'
import Footer from './components/footer.js'


export const cartContext = createContext('light');

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((dataR) => setData(dataR));
  }, []);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <div>
    <Router>
     <Navbar />
     <cartContext.Provider value={{cart,setCart}}>
     <Routes>
       <Route path='/' element={<Card  content={data} />} />
       <Route path='/product/:productId' element={ <Product content={data} />} />
       <Route path='/cart' element={<Cart content={data} />} />     
       <Route path='/about' element={<About />} />
      </Routes>
      </cartContext.Provider>
      <Footer />
    </Router>
    </div>
  );
}
