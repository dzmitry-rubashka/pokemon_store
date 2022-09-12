import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { getPokemons } from "../api";

function* getPokemonsWorker() {
  try {
    const response = yield call(getPokemons);
    yield put(actions.GET_POKEMONS_SUCCESS(response.data));
  } catch (error) {
    yield put(actions.GET_POKEMONS_FAIL("Error:", error));
  }
}

function* getPokemonsWatcher() {
  yield takeEvery(actions.GET_POKEMONS_REQUEST, getPokemonsWorker);
}

export default getPokemonsWatcher;
