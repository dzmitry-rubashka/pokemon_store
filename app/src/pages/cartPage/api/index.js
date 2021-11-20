import api from "../../../http";

export const getCart = () => api.get('/cart');
export const addPokemon = (data) => api.post('/cart/item', data);
export const changeQuantity = (data) => api.patch('/cart/item', data);
export const deletePokemon = (id) => api.delete(`/cart/item/${id}`);
