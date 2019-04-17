// importing 'what working' group library to run on browser that doesn't support fetch
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// one function to export
export function getUsers() {
  return get('users');
}

// delete functionlity
export function deleteUser(id) {
  return del(`users/${id}`);
}

// support get here, but you can handle POST or delete here as well
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// del function. we didn't use delete because its a reserve keyword in js
function del (url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

// handling success
function onSuccess(response) {
  return response.json();
}

// handle error
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
