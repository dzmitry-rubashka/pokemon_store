import api from "../../../http";

export const addOrder = (data) => api.post('/order', data);
export const getOrder = (data) => api.get('/order', data);
