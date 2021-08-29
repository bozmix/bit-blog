import './App.css';
import React, {Fragment} from 'react';
import {Header} from '../components/Header/Header';
import {Home} from '../components/Home/Home';
import {Authors} from '../components/Authors/Authors';
import {About} from '../components/About/About';
import {Footer} from '../components/Footer/Footer';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Fragment>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/authors' component={Authors} />
          <Route path='/about' component={About} />

        </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
