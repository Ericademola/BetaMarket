import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Favourite } from './pages/Favourite';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
