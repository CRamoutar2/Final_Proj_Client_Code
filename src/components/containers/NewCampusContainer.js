import { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { NewCampusView } from "../views";
import { Redirect } from "react-router-dom";

class NewCampusContainer extends Component {
}

const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,
    };
  };

const mapDispatch = (dispatch) => {
    return {
      addCampus: (newCampus) => dispatch(addCampusThunk(newCampus)),
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    };
  };

export default connect(mapState, mapDispatch)(NewCampusContainer);
