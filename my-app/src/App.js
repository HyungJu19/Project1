import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';


import BannerPage from './pages/BannerPage';
import ButtonPage from './pages/ButtonPage';
import ToglePage from './pages/ToglePage';
import TextBox from './pages/TextBox';
import Ba from './pages/Ba';
import Main from './pages/Main';
import Header from './components/Header';


function App() {
  return (
    <HashRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/banner' element={<BannerPage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/togle' element={<ToglePage />} />
        <Route path='/textbox' element={<TextBox />} />
        <Route path='/ba' element={<Ba />} />
        </Routes>

    </HashRouter>
  );
}

export default App;
