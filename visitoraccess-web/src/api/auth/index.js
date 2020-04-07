import api from '../api';

export const login = () => api.get('/login').then(res => res.data);
