import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Favourite } from './pages/Favourite';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';

export const UserContext = React.createContext();

function App() {
  const [cartItem, setCartItem] = useState();
  console.log(cartItem);
  return (
    <div className="App">
      <UserContext.Provider value={{
        cartItem: cartItem, setCartItem
      }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
