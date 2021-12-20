import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllStudentsThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { NewStudentView } from "../views";
import { Redirect } from "react-router-dom";

class NewStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            campusValue: null
        }
    }
  componentDidMount() {
    if (this.props.allStudents.length === 0)
      this.props.fetchAllStudents();
    if (this.props.allCampuses.length === 0)
      this.props.fetchAllCampuses();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let imageURLValue, gpaValue;
    if (event.target.imageURL.value === "")
      imageURLValue = null;
    else
      imageURLValue = event.target.imageURL.value;
    if (event.target.gpa.value === "")
      gpaValue = null;
    else
      gpaValue = event.target.gpa.value;  
    let newStudent = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        campusId: this.state.campusValue,
        gpa: gpaValue
    };
    if (imageURLValue)
      newStudent.imageURL = imageURLValue;
    //End of code section

    await this.props.newStudent(newStudent);
    this.setState(
      {
        redirect: true
      }
    );
  }

  handleChange = (event) => {
    if (event.target.value === "") {
      this.setState(
        {
          campusValue: null
        }
      )
    }
    else {
      this.setState(
        {
          campusValue: event.target.value
        }
      )
    }
  }

  render() {
    if (this.state.redirect) { 
        let newID = parseInt(this.props.allStudents.length - 1);
        return (<Redirect to={"/student/" + this.props.allStudents[newID].id} />);
    }
    return (
      <NewStudentView 
      allCampuses={this.props.allCampuses} 
      campusValue={this.state.campusValue} 
      handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit}
      />
    );
  }
}

//Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    newStudent: (newStudent) => dispatch(addStudentThunk(newStudent)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

//Type check props;
NewStudentContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  newStudent: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(NewStudentContainer);
