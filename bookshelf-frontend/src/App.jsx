import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ThemeToggle from './components/ThemeToggle.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';

import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  function handleAddToCart(book) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  }

  return (
    <div className="app">
      <ThemeToggle />
      <ScrollToTop />
      <CustomCursor />

      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => {}} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="nav-spacer" />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} searchQuery={searchQuery} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </div>
  );
}
