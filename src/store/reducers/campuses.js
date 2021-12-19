import * as at from "../actions/actionTypes";

// REDUCER;
const allCampuses = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      return {...state, campuses: action.payload};
    default:
      return state;
  }
};

export default allCampuses;
