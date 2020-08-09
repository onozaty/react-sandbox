import React from 'react';
import Todo from './Todo';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
  app: {
    textAlign: 'left',
    margin: 10
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Todo />
    </div>
  );
}

export default App;
