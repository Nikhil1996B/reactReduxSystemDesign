import {
  DATA_LOADED,
  DATA_LOADING,
  requestInitiated,
  requestFalied,
  receivePosts,
} from "../actions/Actions";
import { get as getRequest } from "./helpers";

const urlMapper = {
  fetchDataRequest: "https://jsonplaceholder.typicode.com/users",
};

export const fetchData = () => (dispatch) => {
  console.log('fetch called');
  dispatch(requestInitiated());
  let url = urlMapper ? urlMapper.fetchDataRequest : "";
  return getRequest(url, "").then((json) => dispatch(receivePosts(json)));
};
