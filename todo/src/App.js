import React, { Component } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
/*import ReactTable from 'react-table';
import 'react-table/react-table.css';*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      todos: []
    };
  }
  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  deleteList = event => {
    const index = parseInt(event.target.id, 10);
    /*let newState = Object.assign([], this.state.todos);
     newState.splice(index, 1);
     let todo = this.state.todos.filter((todo, i) => i !==event);
     */
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    });
    console.log(this.deleteList);
  };
  addTodo = event => {
    event.preventDefault();
    const listObject = {
      description: this.state.description,
      date: this.state.date
    };
    this.setState({
      todos: [listObject, ...this.state.todos]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <fieldset>
              <legend>Add todo:</legend>
              Description:
              <input
                type="text"
                name="description"
                onChange={this.inputChanged}
                value={this.state.description}
              />
              Date:
              <input
                type="date"
                name="date"
                onChange={this.inputChanged}
                value={this.state.date}
              />
              <input type="submit" value="Add" />
            </fieldset>
          </form>
        </div>
        <div className="App">
          <Todolist data={this.state.todos} deleteList={this.deleteList} />
        </div>
      </div>
    );
  }
}
/*This goes inside div className="App"
        <ReactTable 
          data={this.state.todos}
          defaultPageSize={10}
          filterable={true}

          columns={[
            {
              Header: "Description",
              accessor: "description"
            },
            {
              Header: "Date",
              accessor: "date"
            }
          ]}
          />
    */
console.log("Todo app is running");
export default App;
