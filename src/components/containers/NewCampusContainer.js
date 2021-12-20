import { Component } from "react";
import { connect } from "react-redux";
import { addCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { NewCampusView } from "../views";
import { Redirect } from "react-router-dom";

class NewCampusContainer extends Component {
}
export default connect(mapState, mapDispatch)(NewCampusContainer);
