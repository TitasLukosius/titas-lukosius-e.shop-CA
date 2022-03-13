import React from 'react';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Item from './pages/Item';
import Basket from './pages/Basket';
import Header from './components/header/index';
import Footer from './components/Footer';

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