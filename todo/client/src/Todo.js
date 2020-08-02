import React from 'react';
import axios from 'axios';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    }
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    axios
      .get('/api/todos')
      .then(res => {
        this.setState({
          todos: res.data
        });
      });
  }

  addTodo() {
    const todo = {value: this.state.inputValue};
    axios
      .post('/api/todos', todo)
      .then(res => {
        this.setState({
          inputValue: '',
        })
        this.refreshTodos();
      });
  }

  removeTodo(id) {
    axios
      .delete('/api/todos/' + id)
      .then(res => {
        this.refreshTodos();
      });
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={(event) => this.handleChange(event)} />
        <button onClick={() => this.addTodo()}>Add</button>
        <ul>
          {this.state.todos.map(todo => 
            <TodoItem key={todo._id} index={todo._id} value={todo.value} onClick={() => this.removeTodo(todo._id)} />
          )}
        </ul>
      </div>
    );
  }
}

function TodoItem(props) {
  return (
    <li key={props.index}>
      {props.value}
      <button onClick={props.onClick}>Delete</button>
    </li>
  );
}

export default Todo;