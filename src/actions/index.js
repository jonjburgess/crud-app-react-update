export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchPosts() {
  const request = fetch(`${ROOT_URL}/kittens`).then(r => r.json());

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = fetch(`${ROOT_URL}/kittens/${id}`).then(r => r.json());

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(props)
  };

  const request = fetch(`${ROOT_URL}/kittens`, options).then(r => r.json());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = fetch(`${ROOT_URL}/kittens/${id}`, { method: 'DELETE' }).then(r => r.json());

  return {
    type: DELETE_POST,
    payload: request
  };
}
