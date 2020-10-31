import { fetchData } from "../HTTP/http";
import {
  DATA_LOADED,
  DATA_LOADING,
  UPDATE_DATA,
  FETCH_DATA,
} from "../actions/Actions";

const initalState = { records: null, loading: false, error: null };
// Reducer to create initial store for application
function rootReducer(state = initalState, action) {
  let reducer = actionComposer(state, action);
  return reducer;
}

function actionComposer(state, action) {
  console.log(action);
  if ((action.type == DATA_LOADING)) {
    return Object.assign({}, state, { records: action.payload });
  }
  if (action.type == DATA_LOADED) {
    return { records: Object.assign({}, state, { records: action.payload }) };
  } else if (action.type == UPDATE_DATA) {
    return state;
  }
}

function createRecords() {
  let updateData = fetchData().then((data) => data);
  console.log(updateData);
  return updateData;
}

export default rootReducer;
