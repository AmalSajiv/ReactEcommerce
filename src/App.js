import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WishList from './pages/WishList';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/order' element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
