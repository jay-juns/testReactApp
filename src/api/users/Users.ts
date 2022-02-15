import axios from 'axios';

export const getUsers = async (id:number) => {
  await axios.get(`https://jsonplaceholder.typicode.com/users`)
}