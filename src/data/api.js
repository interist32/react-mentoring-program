const camelcaseKeys = require('camelcase-keys');

const API_HOST = 'http://localhost:4000';
const MOVIES_URL = `${API_HOST}/movies`;


export function getMovies() {
  return fetch(MOVIES_URL, {method: 'GET'})
      .then(response => response.json())
      .then(data => camelcaseKeys(data, {deep: true}))
      .then(data => data.data);
}