import React from 'react';
import './App.css';

// Components

import Navigation from './components/navigation'
import Footer from './components/footer'
import Header from './components/header'
import Trainer from './components/trainers'

function App() {
  return (
    <>
          <Navigation/>
          <Header/>
          <h1 className="m-5">Instructores</h1>
          <Trainer/>
          <Footer/>
    </>
  );
}

export default App;
