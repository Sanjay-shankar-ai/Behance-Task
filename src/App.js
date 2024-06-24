import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/Hero';
import Heroine from './components/Heroine';
import BehanceList from './components/BehanceList';
import Footer from './components/Footer';

function App() {
  const [sortType, setSortType] = useState('recommended');

  return (
    <>
      <Header />
      <HeroSection />
      <Heroine setSortType={setSortType} />
      <BehanceList sortType={sortType} />
      <Footer />
    </>
  );
}

export default App;
