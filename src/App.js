import React from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Aside from './Components/Aside'
import Logo from './Components/Logo'

import Routes from './router'

function App() {
  return (
    <div className="App">
      <Logo/>
      <Header/>
      <Aside/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
