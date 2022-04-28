import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:8080';

/*
    // API 주소를 다른 곳으로 사용함
    client.defaults.baseURL = "https://external-api-server.com/";
    // 디폴트 헤더 설정
    client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";
*/

export default client;
