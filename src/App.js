import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Slider from "./components/cards/slider";
import './components/cards/embla.css'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Slider  slides={Array.from(Array(5).keys())} options={{ align: 'start', dragFree: true, loop: true }} />
    </>
  );
}

export default App;

