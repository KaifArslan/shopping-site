import React from 'react';

const Navbar = () => {
  return (
    <header id='header'>
    <img id='header-img' src='https://i.pinimg.com/750x/f3/d9/23/f3d923becab3e0ef728ecbe47fa19710.jpg' alt='imagenotworking' />
    <nav id='nav-bar'>
    <ul>
    <li ><a className='nav-link' href='/'>Home</a></li>
    <li ><a className='nav-link' href='/about' >About</a></li>
    <li><a className='nav-link' href='/Cart' >Cart <i class="fas fa-shopping-cart"></i></a></li>
    </ul>
    </nav>
    </header>
  );
};

export default Navbar;
