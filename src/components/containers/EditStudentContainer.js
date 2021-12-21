import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedStudent: this.props.student
        }
    }

    componentDidMount() {
      this.props.fetchAllCampuses();
    }
    
    handleChange = (event) => {
        const formStudent = {...this.state.updatedStudent};
        const inputField = event.target.name;
        const inputValue = event.target.value;
        formStudent[inputField] = inputValue;
        if (formStudent.campusId === "")
          formStudent.campusId = null;
        this.setState({updatedStudent: formStudent});
    }
    
    handleSubmit = async (event) => {
      event.preventDefault();
      await this.props.editStudent(this.state.updatedStudent);
      this.props.showEdit();
      await this.props.refresh();
    }

    render() {
      return (
        <EditStudentView 
          student={this.state.updatedStudent} 
          allCampuses={this.props.allCampuses} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}/>
      );
    }
  }
  
  // Map state to props;
  const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      editStudent: (student) => dispatch(editStudentThunk(student)),
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
  };
  
  // Type check props;
    EditStudentContainer.propTypes = {
      editStudent: PropTypes.func.isRequired,
      allCampuses: PropTypes.array.isRequired,
      fetchAllCampuses: PropTypes.func.isRequired,
  };
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(EditStudentContainer);
