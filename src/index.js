import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Review from './pages/Review';
import Favourites from './pages/Favourites';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberhomepage" element={<MemberHomepage />} />
        <Route path="/startpoint" element={<StartPointWithChargeStaions />} />
        <Route path="/routesuggestion" element={<RouteSuggestion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
