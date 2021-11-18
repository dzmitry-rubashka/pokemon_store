import PokemonPageLayout from "../components/pokemonsPageLayout";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect} from "react";
import {CHANGE_PAGE, GET_POKEMONS_REQUEST} from '../actions'
import {useHistory} from "react-router-dom";

import {useParams} from 'react-router-dom';

import {ADD_POKEMON_REQUEST} from "../../cartPage/actions";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.pokemonDetails);
  const {name} = useParams();
  const history = useHistory();

  const handleAddPokemon = useCallback(() => {
    const newPokemon = {
      //error is here
      id: info.id,
      name: info.name,
      image: info.image,
      price: info.price,
      quantity: 1,
    }
    dispatch(ADD_POKEMON_REQUEST(newPokemon));
  }, [dispatch, info]);

  const {list, isLoading, error, currentPage} = useSelector(state => state.pokemonsPage)

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/pokemons/${pokemonName}`);
  },[]);

  const handlePageChange = useCallback((page) => {
    dispatch(CHANGE_PAGE(page));
  },[dispatch])



  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage, name))
  },[dispatch, currentPage, name]);

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
  />;
};

export default PokemonPageContainer;