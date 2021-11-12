import api from "../../../http";

export const signUp = (signUpData) => api.post('auth/signup', signUpData);