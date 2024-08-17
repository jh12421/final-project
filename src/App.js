import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ItemsList from './pages/ItemsList';
import ItemDetail from './pages/ItemDetail';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
