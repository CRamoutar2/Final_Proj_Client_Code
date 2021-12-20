import { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
}

 const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
  };

  const mapDispatch = (dispatch) => {
    return {
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
    };
  };

export default connect(mapState, mapDispatch)(EditCampusContainer);
