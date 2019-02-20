import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getTodos() {
  return get('todos');
}

export function addTodo() {
  return post('todos');
}

export function deleteTodo(id) {
  return del(`todos/${id}`);
}

function get(url) {
  console.log('getting ' + baseUrl + url);
  return fetch(baseUrl + url); //.then(onSuccess, onError);
}

function post(url) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return fetch(request); //.then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request); //.then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.warn(error);
}
