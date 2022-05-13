import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Info from './pages/Info';
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/home" element={<Home/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
