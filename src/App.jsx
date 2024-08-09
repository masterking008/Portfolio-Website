import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './components/Style.css';
import './components/LocomotiveScroll.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });
    
    setTimeout(()=>{
      scroll.update();
  }
  , 2000);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
        <Navbar />
      <div data-scroll-container ref={scrollRef}>
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
