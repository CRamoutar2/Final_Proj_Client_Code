import { Component } from 'react';
import { connect } from 'react-redux';
import { editStudentThunk } from '../../store/thunks';
import { fetchAllCampusesThunk } from "../../store/thunks";
import { EditStudentView } from "../views";

class EditStudentContainer extends Component {
}
  const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
  };

  const mapDispatch = (dispatch) => {
    return {
      editStudent: (student) => dispatch(editStudentThunk(student)),
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
  };

export default connect(mapState, mapDispatch)(EditStudentContainer);
