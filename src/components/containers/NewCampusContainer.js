import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCampusThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { NewCampusView } from "../views";
import { Redirect } from "react-router-dom";

class NewCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
  componentDidMount() {
    if (this.props.allCampuses.length === 0)
      this.props.fetchAllCampuses();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let imageURLValue, descriptionValue;
    if (event.target.imageURL.value === "")
      imageURLValue = null;
    else
      imageURLValue = event.target.imageURL.value;
    if (event.target.description.value === "")
      descriptionValue = null;
    else
      descriptionValue = event.target.description.value;    
    let newCampus = {
        name: event.target.name.value,
        address: event.target.address.value,
        description: descriptionValue
    };
    if (imageURLValue)
      newCampus.imageURL = imageURLValue;
    await this.props.newCampus(newCampus);
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) { 
        let newID = parseInt(this.props.allCampuses.length - 1);
        return (<Redirect to={"/campus/" + this.props.allCampuses[newID].id} />);
    }
    return (
      <NewCampusView handleSubmit={this.handleSubmit}/>
    );
  }
}

//Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    newCampus: (newCampus) => dispatch(addCampusThunk(newCampus)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

//Type check props;
NewCampusContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  addCampus: PropTypes.func.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(NewCampusContainer);
