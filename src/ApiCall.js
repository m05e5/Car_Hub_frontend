import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users/1';

const address = fetch(baseURL)
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

export const ifConnected = async () => {
    const a = await address;
    return(a);
};