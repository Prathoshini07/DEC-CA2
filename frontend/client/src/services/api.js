import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dec-ca2.onrender.com/api', // Backend API base URL
});

export const fetchData = () => api.get('/fetch-data');
export const getData = () => api.get('/data');
export const createData = (data) => api.post('/data', data);
export const deleteData = (id) => api.delete(`/data/${id}`);