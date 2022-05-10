import axios from 'axios';

const client = axios.create();

if (process.env.NODE_ENV === 'development') {
  client.defaults.baseURL = 'http://localhost:3000';
} else {
  client.defaults.baseURL =
    'http://ec2-52-79-125-215.ap-northeast-2.compute.amazonaws.com';
}

const token = localStorage.getItem('userToken');

if (token) {
  client.defaults.headers.common = { Authorization: `bearer ${token}` };
}

export default client;
