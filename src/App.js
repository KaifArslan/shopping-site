import React from 'react';
import './style.css';
import Navbar from './components/navbar.jsx';
import Card from './components/card.jsx';
import Product from './components/Product.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect ,useState} from 'react';
import Cart from './components/Cart.jsx'
import {createContext} from 'react'
import About from './components/About.jsx'
import Footer from './components/footer.jsx'
import Login from './components/logins-users/login-component.jsx'

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
       <Route path='/login' element={<Login />} />
      </Routes>
      </cartContext.Provider>
      <Footer />
    </Router>
    </div>
  );
}
