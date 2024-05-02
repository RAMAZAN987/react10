import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
