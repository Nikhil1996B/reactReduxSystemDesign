export const DATA_REQUESTED = "DATA_REQUESTED";
export const DATA_LOADED = "DATA_LOADED";
export const DATA_LOADING = "DATA_LOADING";
export const DATA_LOADING_FAILED = "DATA_LOADING_FAILED";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const receivePosts = (json) => {
  return {
    type: DATA_LOADED,
    payload: json,
    loading: false,
    receivedAt: Date.now(),
  };
};

export const requestFalied = () => {
  return {
    type: DATA_LOADING_FAILED,
    payload: {},
    loading: false,
    receivedAt: Date.now(),
  };
};

export const requestInitiated = () => {
  console.log("called");
  return {
    type: DATA_REQUESTED,
    payload: null,
    loading: true,
    receivedAt: Date.now(),
  };
};
