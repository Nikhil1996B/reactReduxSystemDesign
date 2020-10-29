// fetch the users from API
export const fetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((posts) => posts)
    .catch((err) => console.log("Somethin went wrong!", err));
