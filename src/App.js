
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import ProductDetails from './components/productDetails';
import { CartProvider } from './context/cartContext';
import Home from './components/Home';
import Shop from './components/shop/Shop';
import Cart from './components/Cart/Cart';
import BigDiscount from './components/home/bigDiscount';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import { ProductProvider } from './context/productContext';
function App() {



  return (
    <div className="App">
      
    <div>  
    
    <BrowserRouter>
    <CartProvider>
      <ProductProvider>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/items' element={<BigDiscount/>}></Route>
      <Route path="/items/:itemId" element={<ProductDetails/>}></Route>
    </Routes>
      </ProductProvider>
    
    </CartProvider>

    </BrowserRouter>
    </div>
    
    <ToastContainer/>
    </div>
  );
}

export default App;



