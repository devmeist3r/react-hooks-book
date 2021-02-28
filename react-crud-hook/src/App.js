import React, { Fragment, useContext, useReducer } from 'react';
import { Card, Button } from 'react-bootstrap';
import TodoList from './ToDoList';
const todosInitialState = {
  todos: [
    { id: 1, text: 'finishing writing hooks chapter' },
    { id: 2, text: 'play with kids' },
    { id: 3, text: 'read bible' },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    case 'delete':
      const filteredTodoState = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };
    default:
      return todosInitialState;
  }
}

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <Fragment>
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodosContext.Provider>
    </Fragment>
  );
}
export default App;
