import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", todos: [], date: ''};
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  deleteList = index => {
    const todos =  this.state.todos.filter((todo, i ) => i !==index);
    this.setState({
      todos: todos
    });
  }
  addTodo = event => {
    event.preventDefault();
    const list = {
      description: this.state.description,
      date: this.state.date
    };
    this.setState({
      todos: [...this.state.todos, list]
    });
  };

  render() {
    
      const todolist = this.state.todos.map((item, index) => (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td>
            <button onClick={this.deleteList.bind(this, index)}>
              Delete
            </button>
          </td>
        </tr>
      ));
    
    return <div className="container">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <legend>Description:</legend>
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description} />
            <legend>Date:</legend>

            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date} />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Date:</th>
                <th>Description:</th>
              </tr>
              {todolist}
            </tbody>
          </table>
        </div>
      </div>;
  }
}

export default App;
