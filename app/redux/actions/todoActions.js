import * as types from './actionTypes';
import { getTodos } from '../../api/todoApi';

// action creators
export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos };
}

// thunks
export function loadTodos() {
  return dispatch => {
    getTodos()
      .then(res => res.json())
      .then(parsedRes => dispatch(loadTodosSuccess(parsedRes)))
      .catch(error => console.warn(error));
  };
}
