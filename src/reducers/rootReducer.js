import { fetchData } from "../HTTP/http";
import {
  DATA_LOADED,
  DATA_LOADING,
  UPDATE_DATA,
  FETCH_DATA,
} from "../actions/Actions";
import { combineReducers } from "redux";

const initalState = { records: null, loading: false, error: null };

// Reducer to create initial store for application and to redcue actions to form new state

function reducer(state = initalState, action) {
  console.log(action);
  if (action.type == DATA_LOADING) {
    return { ...state, records: action.payload, loading: true, error: null };
  }
  if (action.type == DATA_LOADED) {
    return { ...state, records: action.payload, loading: false, error: false };
  } else if (action.type == UPDATE_DATA) {
    return state;
  } else {
    return state;
  }
}
export default combineReducers({
  records: reducer,
});
