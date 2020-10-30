import { fetchData } from "./Actionpaylaod";
import { DATA_LOADED, DATA_LOADING, UPDATE_DATA, FETCH_DATA } from "../actions/Actions"

// Reducer to create initial store for application
const rootReducer = (state = initalState, action) =>
  __actionReducer(action.type);

const initalState = { records: null };

const __actionReducer = (__actionType) =>
  ({
    FETCH_DATA: {
      records: createRecords(),
    },
    UPDATE_DATA: initalState,
    "@@INIT": initalState,
  }[__actionType]);

const createRecords = () => fetchData().then((data) => console.log(data));

export default rootReducer;
