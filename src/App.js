
import './App.css';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { Routes,Route } from 'react-router';
import Cart from './pages/Cart';


function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={ <Home/> }/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productlist/:category' element={<ProductList/>}/>
    </Routes>
    
    
    </>
  );
}

export default App;
