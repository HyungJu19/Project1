import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
