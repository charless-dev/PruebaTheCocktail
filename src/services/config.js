import axios from 'axios';

const BASE_URL = 'https://gorest.co.in/public-api/';

const API = axios.create({
    baseURL: BASE_URL
});

export default API;