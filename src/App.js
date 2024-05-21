import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Favourite } from './pages/Favourite';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
