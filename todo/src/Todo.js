import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['todo1', 'todo2'],
      inputValue: '',
    }
  }

  addTodo() {
    const todos = this.state.todos;
    this.setState({
      todos: todos.concat([this.state.inputValue]),
      inputValue: '',
    })
  }
  removeTodo(index) {
    const todos = this.state.todos;
    this.setState({
      todos: todos.slice(0, index).concat(todos.slice(index + 1)),
    })
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
          {this.state.todos.map((todo, index) => 
            <TodoItem key={index} index={index} value={todo} onClick={() => this.removeTodo(index)} />
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