import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import AForm from './A'; 
import BForm from './B'; 
import CForm from './C';
import Preview from './preview';
function App() {
  return (
    <div className="app-container"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/form/A" element={<AForm />} />
      <Route path="/form/B" element={<BForm />} />
      <Route path="/form/C" element={<CForm />} />
    </Routes>
    </div>
  );
}

export default App;
