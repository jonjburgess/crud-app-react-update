import { FETCH_POSTS, FETCH_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      if (action.payload.data.status === "success") {
        return { ...state, all: action.payload.data.data };
      }
      break;
    case FETCH_POST:
      if (action.payload.data.status === "success") {
        return { ...state, post: action.payload.data.data };
      }
      break;
    default:
      return state;
  }
}
