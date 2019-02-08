import React, { Component } from 'react'; // <-- Se importa Component
import logo from './logo.svg';
import './App.css';

import { tasks } from './tasks.json';

import TaskForm from './components/TaskForm.js';

// La clase de la aplicación extiende de Component
class App extends Component {

  constructor(){
    super();
    // this.state = { tasks : tasks };
    this.state = { tasks };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
      // Recorre el array retornando todos los obj entre comillas agregado uno
      // al final
      tasks: [...this.state.tasks, task]
    });
  }

  removeTask(index){
    console.log("Indice de la tarea: ".index);
    this.setState({
      // filter recorre y elimina dependiendo de la condicion utilizada y retorna el array
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return(
        <div key={i} className="col-md-4 mt-4">
          <div className="card">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{task.priority}</span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>Eliminar</button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="%PUBLIC_URL%/" className="h3 ml-4 text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              { this.state.tasks.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TaskForm onAddTask={this.handleAddTask}/>
            </div>
            <div className="col-md-9">
              <div class="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

// Se debe exportar la aplicación para poder llamar desde otro lados
export default App;
