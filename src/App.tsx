import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditProductPage from './pages/EditProductPage';
import AddProductPage from './pages/AddProductPage';  

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditProductPage />} />
      <Route path="/add" element={<AddProductPage />} /> 
    </Routes>
  );
};

export default App;
