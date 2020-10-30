import { DATA_LOADED, DATA_LOADING } from "../actions/Actions"

// fetch the users from API
const urlMapper = { fetchDataRequest: "https://jsonplaceholder.typicode.com/users" };

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
const __parseParamsToQuery = params => {
  if (!params) return '';
  return (
    '?' +
    Object.keys(params)
      .map(key => key + '=' + encodeURI(params[key]))
      .join('&')
  );
};

const get = (url, params) => {
  const queryString = __parseParamsToQuery(params);
  return fetch(url + queryString, { credentials: 'same-origin' })
    .then(__checkStatus)
    .then(__parseJSON).catch(err => console.log(err));
};
const post = (url, payload) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
    .then(__checkStatus)
    .then(__parseJSON).catch(err => console.log(err));
};

// Fetch the data from mapped url
export const fetchData = () => {
  let url = urlMapper ? urlMapper.fetchDataRequest : '';
  return get(url, '');
};
