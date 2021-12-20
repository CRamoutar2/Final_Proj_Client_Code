import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchAllStudentsThunk, deleteStudentThunk } from '../../store/thunks';
import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
    componentDidMount() {
      this.props.fetchAllStudents();
    }
    render(){
        return(
            <div>
                <AllStudentsView 
                  students={this.props.allStudents}
                  deleteStudent={this.props.deleteStudent}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
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
};

export default connect(mapState, mapDispatch)(AllStudentsContainer);
