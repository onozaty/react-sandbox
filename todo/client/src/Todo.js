import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  button: {
    marginLeft: 5
  }
};

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
    const { classes } = this.props;
    return (
      <div>
        <TextField value={this.state.inputValue} onChange={(event) => this.handleChange(event)} />
        <Button variant="contained" color="primary" size="small" className={classes.button} onClick={() => this.addTodo()}>Add</Button>
        <List>
          {this.state.todos.map(todo => 
            <TodoItem key={todo._id} index={todo._id} value={todo.value} classes={classes} onClick={() => this.removeTodo(todo._id)} />
          )}
        </List>
      </div>
    );
  }
}

function TodoItem(props) {
  const { classes } = props;
  return (
    <ListItem key={props.index}>
      {props.value}
      <Button variant="outlined" size="small" onClick={props.onClick} className={classes.button}>Delete</Button>
    </ListItem>
  );
}

export default withStyles(styles)(Todo);
