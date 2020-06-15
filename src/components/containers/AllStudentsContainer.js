import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../thunks";
import AllStudentsView from "../views/AllStudentsView.js";

// Smart container;
class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        hello={this.props.hello}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    hello: "hello world!!!",
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);