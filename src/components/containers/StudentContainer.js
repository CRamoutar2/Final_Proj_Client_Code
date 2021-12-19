import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect} drom 'react-router-dom';

class StudentContainer extends Component {
  Constructor(props) {
    super(props);
    this.state {
      redirect: false;
      showEdit: false;
    }
    
    componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
    }
    
    handleClick = async () => {
      await this.props.deleteStudent(this.props.match.params.id);
      this.setState({
        redirect: true
      })
    }
    
    showEdit = () => {
      this.setState({
        showEdit: !this.state.showEdit
      })
    }
    
    refresh = async () => {
      await this.props.fetchStudent(this.props.match.params.id);
    }

    render() {
      if (this.state.redirect)
        return (<Redirect to="/students"/>);
      return (
        <StudentView 
        student={this.props.student}
        handleClick={this.handleClick}
        showEditClick={this.showEdit}
        showEdit={this.state.showEdit}
        refresh={this.refresh}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent:(id) => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
