import api from "../../../http";

export const getPokemonDetails = (name) => api.get(`products/${name}`);
