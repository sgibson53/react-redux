import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
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

export function saveCourse(course) {
  return function(dispatch) {
    // This returned funciton is utilized by the redux-thunk middleware
    // Redux thunk injects dispatch so we don't have to
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        savedCourse.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
