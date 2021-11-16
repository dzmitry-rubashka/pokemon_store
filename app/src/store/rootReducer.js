import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';

import storage from 'redux-persist/lib/storage';

import authReducer from '../pages/home/reducers';
import registrationReducer from "../pages/registrationPage/reducers";
import pokemonsPageReducer from "../pages/pokemonsPage/reducers";
import pokemonDetailsPageReducer from "../pages/pokemonDetailsPage/reducers";
import personalDataPageReducer from "../pages/personalDataPage/reducers"
import cartPageReducer from "../pages/cartPage/reducers";

const authBlackListedFields = createBlacklistFilter('auth', [
  'isLoading',
  'error',
]);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [authBlackListedFields],

};

const rootReducer = combineReducers({
  auth: authReducer,
  registered: registrationReducer,
  pokemonsPage: pokemonsPageReducer,
  pokemonDetails: pokemonDetailsPageReducer,
  personalData: personalDataPageReducer,
  cart: cartPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
