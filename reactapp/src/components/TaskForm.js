import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    }
    // Propiedad de la clase enlazada al metodo con su scope(alcance) de la clase
    this.handleInput = this.handleInput.bind(this); //<-- scope de this.setState
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTask(this.state);
    console.log('sending the data...');
    console.log(this.state);
  }

  handleInput(e){
    const { value, name }= e.target;
    this.setState({
        [name]: value
    });
    // console.log(this.state);
    // console.log(e.target.value, e.target.name);
  }

  render(){
    return(
      <div className="card mt-4">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput} // <-- propiedad de la clase
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select name="priority" className="form-control" onChange={this.handleInput}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <button className="btn btn-block btn-lg btn-warning text-white">Guardar</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
