import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-23f74.firebaseio.com/'
});

export default instance;