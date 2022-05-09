import axios from 'axios';

const client = axios.create();

if (process.env.NODE_ENV === 'development') {
  client.defaults.baseURL = 'http://localhost:3000';
} else {
  client.defaults.baseURL =
    'http://ec2-52-79-125-215.ap-northeast-2.compute.amazonaws.com';
}

/*
    // API 주소를 다른 곳으로 사용함
    client.defaults.baseURL = "https://external-api-server.com/";
    // 디폴트 헤더 설정
    client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";
*/

export default client;
