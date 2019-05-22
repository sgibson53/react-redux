import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    // This returned funciton is utilized by the redux-thunk middleware
    // Redux thunk injects dispatch so we don't have to
    return authorApi
      .getAuthors()
      .then(courses => {
        dispatch(loadAuthorsSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
