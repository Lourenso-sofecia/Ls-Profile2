import React from 'react';
import { About } from '../pages/About';
import { Counter } from '../pages/Counter';
import { Portfolio } from '../pages/Portfolio';
import { Services } from '../pages/Services';
import { Hero } from './Hero';
import { Testimonials } from '../pages/Testimonials'; 
import { Contact } from '../pages/Contact';
import { Citacoes } from '../pages/Citacoes';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Citacoes />
      <Contact />
    </>
  )
}
