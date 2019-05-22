import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (!courses.length) {
      loadCourses.loadCourses().catch(error => {
        alert('Loading courses failed' + error);
      });
    }

    if (!authors.length) {
      loadAuthors.loadAuthors().catch(error => {
        alert('Loading authors failed' + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

// Only expose what you have to!! You don't want useless re-renders
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

// Only expose the actions that you need!!
const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
