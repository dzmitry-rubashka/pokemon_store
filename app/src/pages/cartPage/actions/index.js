import {createAction} from 'redux-actions'

export const GET_CART_REQUEST = createAction('GET_CART_REQUEST');
export const GET_CART_SUCCESS = createAction('GET_CART_SUCCESS');
export const GET_CART_FAIL = createAction('GET_CART_FAIL');

export const ADD_POKEMON_REQUEST = createAction('ADD_POKEMON_REQUEST');
export const ADD_POKEMON_SUCCESS = createAction('ADD_POKEMON_SUCCESS');
export const ADD_POKEMON_FAIL = createAction('ADD_POKEMON_FAIL');

export const CHANGE_QUANTITY_REQUEST = createAction('ADD_CART_REQUEST');
export const CHANGE_QUANTITY_SUCCESS = createAction('ADD_CART_SUCCESS');
export const CHANGE_QUANTITY_FAIL = createAction('ADD_CART_FAIL');

export const DELETE_POKEMON_REQUEST = createAction('DELETE_POKEMON_REQUEST');
export const DELETE_POKEMON_SUCCESS = createAction('DELETE_POKEMON_SUCCESS');
export const DELETE_POKEMON_FAIL = createAction('DELETE_POKEMON_FAIL');
