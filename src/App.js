import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';

export const AppContext = React.createContext()
function App() {
  const [cartItem, setCartItem] = useState();
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <div className="App">
      <AppContext.Provider value={{
        cartItem: cartItem, setCartItem,
        cartNumber: cartNumber, setCartNumber
      }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
