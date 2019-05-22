import * as types from '../actions/actionTypes';
import inititalState from './initialState';

export default function authroReducer(state = inititalState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
