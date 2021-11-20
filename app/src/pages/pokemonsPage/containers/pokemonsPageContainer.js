import PokemonPageLayout from "../components/pokemonsPageLayout";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useParams} from 'react-router-dom';

import {ADD_POKEMON_REQUEST} from "../../cartPage/actions";
import {GET_POKEMON_DETAILS_REQUEST} from '../../pokemonDetailsPage/actions';
import {CHANGE_PAGE, GET_POKEMONS_REQUEST} from '../actions'

const PokemonPageContainer = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.pokemonDetails);
  const {name} = useParams();
  const history = useHistory();

  const handleAddPokemon = useCallback(() => {
    const newPokemon = {
      id: info.id,
      name: info.name,
      image: info.image,
      price: info.price,
      quantity: 1,
    }
    dispatch(ADD_POKEMON_REQUEST(newPokemon));
  }, [dispatch, info, name]);

  const {list, isLoading, error, currentPage} = useSelector(state => state.pokemonsPage)

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/pokemons/${pokemonName}`);
  }, []);

  const handlePageChange = useCallback((page) => {
    dispatch(CHANGE_PAGE(page));
  }, [dispatch])

  const [isUploadedNamePokemonToState, setIsUploadPokemonToState] = useState('');

  const addPokemonToState = useCallback((name) => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(name));
    setIsUploadPokemonToState(name);
  },[dispatch]);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage, name))

    if (isUploadedNamePokemonToState === info.name) {
      const newPokemon = {
        id: info.id,
        name: info.name,
        image: info.image,
        price: info.price,
        quantity: 1,
      }
      dispatch(ADD_POKEMON_REQUEST(newPokemon));
    }

  }, [dispatch, currentPage, name, isUploadedNamePokemonToState, info]);

  return <PokemonPageLayout
    price={info.price}
    name={info.name}
    image={info.image}
    list={list}
    id={info.id}

    isLoading={isLoading}
    handleGoToDetails={handleGoToDetails}
    handlePageChange={handlePageChange}
    currentPage={currentPage}
    handleAddPokemon={handleAddPokemon}

    addPokemonToState={addPokemonToState}
  />;
};

export default PokemonPageContainer;