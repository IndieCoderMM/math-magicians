import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import CalculatorPage from './pages/CalculatorPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
