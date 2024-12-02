import React from 'react';
import Header from './components/Header/Header';
/*import Hero from './components/Hero/Hero'
import Slider from "./components/cards/slider";
import './components/cards/embla.css';*/

import Landing from "./components/landing-page/Landing";
import Footer from './components/Footer/Footer';


function App() {
  return (
  /*<>
    <Hero /> 
    <Slider  slides={Array.from(Array(5).keys())} options={{ align: 'start', dragFree: true, loop: true }} />
   </> */
   <>
    <Header />
    <Landing />
    <Footer />
    </>
  );
}

export default App;

