import React from 'react'
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Citacoes } from './Citacoes';
import { Contact } from './Contact';
import { Footer } from '../common/Footer';

export const Routes = () => {
  return (
    <>
        <Router>
            <Header />
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/testimonials' component={Testimonials} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/citacoes' component={Citacoes} />
              <Route exact path ='/contact' component={Contact} />
            </Switch>
            <Footer />
        </Router>
    </>
  )
}
