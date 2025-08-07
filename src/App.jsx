import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WorkDetail from './components/WorkDetail';
import About from './components/About';
import Contact from './components/Contact';
import CarolinaBucci from './components/CarolinaBucci';
import Personal from './components/Personal';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/carolina-bucci" element={<CarolinaBucci />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;