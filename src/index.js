import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import Calc from './components/pages/Calc';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/inspiration" element={<Quotes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
