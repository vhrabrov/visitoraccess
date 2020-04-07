import api from '../api';

export const bookPatient = id => api.put(`/patient/book/${id}`).then(res => res.data);

export const getPatients = data => api.post('/patient/search', data).then(res => res.data);

export const getRules = () => api.get(`/rules`).then(res => res.data);

export const getSurvey = () => api.get(`/survey`).then(res => res.data);

export const unbookPatient = id => api.put(`/patient/unbook/${id}`).then(res => res.data);