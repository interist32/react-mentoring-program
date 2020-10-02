const camelcaseKeys = require('camelcase-keys');
const snakeize = require('snakeize')

const API_HOST = 'http://localhost:4000';
const MOVIES_URL = `${API_HOST}/movies`;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8'
};


export function getMovies() {
  return fetch(MOVIES_URL, {
           method: 'GET',
           headers,
         })
      .then(response => response.json())
      .then(data => camelcaseKeys(data, {deep: true}))
      .then(data => data.data);
}

export function updateMovie(movie) {
  return fetch(MOVIES_URL, {
           method: 'PUT',
           body: JSON.stringify(snakeize(movie)),
           headers,
         })
      .then((response) => response.json())
      .then(data => camelcaseKeys(data, {deep: true}))
      .catch((error) => {
        return error;
      });
}

export function deleteMovie(movieId) {
  return fetch(`${MOVIES_URL}/${movieId}`, {
    method: 'DELETE',
  });
}

export function addMovie(movie) {
  return fetch(MOVIES_URL, {
           method: 'POST',
           body: JSON.stringify(snakeize(movie)),
           headers,
         })
      .then(response => response.json())
      .then(data => camelcaseKeys(data, {deep: true}));
}