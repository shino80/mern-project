import axios from 'axios';
const BASE_URL = 'https://goraku-blog.onrender.com/api';

export default axios.create({
    baseURL: BASE_URL
});