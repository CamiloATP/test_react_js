// Primero se importa react
import React from 'react';
// Se importa ReactDOM el cual esta enfocado en el navegador
import ReactDOM from 'react-dom';
// React.js trabaja con webpack tecnologia de empaquetado para importar archivos
// css dentro de un js
import './index.css';

// Se esta importando una aplicación desde App.js
import App from './App';

// Para las app que simulan datos de manera local (para guardar los datos en el
// navegador o computador de manera offline)
// progressive web app <-- investigar
import * as serviceWorker from './serviceWorker'; // para que la app trabaje sin conexión

// App para el navegador(ReactDOM) renderizar la app en pantalla
ReactDOM.render(
  <App />, // <-- la App importada jsx de la app
  document.getElementById('root') // <-- Donde va a cargar la app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
