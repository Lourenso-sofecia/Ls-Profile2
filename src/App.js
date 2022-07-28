import { useEffect } from 'react';
import './App.css';

import { Routes } from './components/pages/Routes';

import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect( () => {
    AOS.init();
    AOS.refresh();
   },[]);
   
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
