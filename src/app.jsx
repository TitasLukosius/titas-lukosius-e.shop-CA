import React from 'react';
import Catalog from './pages/catalog';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Item from './pages/item';
import Basket from './pages/basket';
import Header from './components/header/index';
import Footer from './components/footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={< Catalog/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/item:itemId" element={<Item />} />
            <Route path="/basket" element={<Basket />} />
        </Routes>
      <Footer />    
  </BrowserRouter>
  );
}

export default App;