import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

import BannerPage from './pages/BannerPage';
import ButtonPage from './pages/ButtonPage';
import ToglePage from './pages/ToglePage';
import TextBox from './pages/TextBox';
import Ba from './pages/Ba';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/Project1/banner' element={<BannerPage />} />
        <Route path='/Project1/button' element={<ButtonPage />} />
        <Route path='/Project1/togle' element={<ToglePage />} />
        <Route path='/Project1/textbox' element={<TextBox />} />
        <Route path='/Project1/ba' element={<Ba />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
