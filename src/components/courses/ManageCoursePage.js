import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import PropTypes from 'prop-types';

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  ...props // Stores any properties we haven't destructured in a variable called props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!courses.length) {
      loadCourses().catch(error => {
        alert('Loading courses failed' + error);
      });
    }

    if (!authors.length) {
      loadAuthors().catch(error => {
        alert('Loading authors failed' + error);
      });
    }
  }, []); // React hook, effectively the same as componentDidMount

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    saveCourse(course); // saveCourse is bound to the destructured variable declared with this function, NOT the import up top
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired
};

// Only expose what you have to!! You don't want useless re-renders
function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
}

// Only expose the actions that you need!!
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
