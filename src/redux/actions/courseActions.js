import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  debugger;
  return function(dispatch) {
    // This returned funciton is utilized by the redux-thunk middleware
    // Redux thunk injects dispatch so we don't have to
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
