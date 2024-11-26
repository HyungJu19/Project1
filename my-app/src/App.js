import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

import BannerPage from './pages/BannerPage';
import ButtonPage from './pages/ButtonPage';
import ToglePage from './pages/ToglePage';
import TextBox from './pages/TextBox';
import Ba from './pages/Ba';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
       <Route path='/' element={<Main />} />
        <Route path='/banner' element={<BannerPage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/togle' element={<ToglePage />} />
        <Route path='/textbox' element={<TextBox />} />
        <Route path='/ba' element={<Ba />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
