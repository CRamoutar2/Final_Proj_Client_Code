import { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";

class EditCampusContainer extends Component {
}

export default connect(mapState, mapDispatch)(EditCampusContainer);
