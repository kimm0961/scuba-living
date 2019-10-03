import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Produkter from './components/Produkter/Produkter';
import Rejser from './components/Rejser/Rejser';
import Kursus from './components/Kurser/Kursus';
import Login from './components/Login/Login';
import Opretbruger from './components/Login/Opretbruger';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/produkter' component={Produkter} />
        <Route path='/rejser' component={Rejser} />
        <Route path='/kurser' component={Kursus} />
        <Route path='/kontakt' render={ () =>{"Kontakt os"}} />
        <Route path='/om' render={ () =>{"Om os"}} />
        <Route path='/login' component={Login} />
        <Route path='/opret' component={Opretbruger} />
      </Switch>

      <Footer />

    </div>

    </BrowserRouter>
  );
}

export default App;
