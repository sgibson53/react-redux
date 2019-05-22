import * as types from '../actions/actionTypes';
import inititalState from './initialState';

export default function courseReducer(state = inititalState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return (state = [...state, { ...action.course }]);
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
