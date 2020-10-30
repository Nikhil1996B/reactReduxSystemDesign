import { DATA_LOADED, DATA_LOADING } from "../actions/Actions"

// fetch the users from API
const __checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
const __parseJSON = response => {
  return response.json();
};


export const fetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(__checkStatus)
    .then(__parseJSON)
    .catch((err) => console.log("Somethin went wrong!", err));
