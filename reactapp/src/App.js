import React, { Component } from 'react'; // <-- Se importa Component
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'; // Se importa Navigation

// La clase de la aplicación extiende de Component
class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation titulo="Titulo 1"/>
          <Navigation titulo="Titulo 2"/>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

// Se debe exportar la aplicación para poder llamar desde otro lados
export default App;
