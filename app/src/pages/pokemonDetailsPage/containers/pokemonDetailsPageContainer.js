import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect} from "react";

import {GET_POKEMON_DETAILS_REQUEST} from '../actions';

import PokemonDetailsPageLayout from "../components/pokemonDetailsPageLayout";
import {ADD_POKEMON_REQUEST} from "../../cartPage/actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const {info, isLoading} = useSelector(state => state.pokemonDetails)
  const {name} = useParams();

  const handleAddPokemon = useCallback(() => {

    const newPokemon = {
      id: info.id,
      name: info.name,
      image: info.image,
      price: info.price,
      quantity: 1,
    }
    dispatch(ADD_POKEMON_REQUEST(newPokemon));
  }, [dispatch, info]);

  useEffect(()=> {
    dispatch(GET_POKEMON_DETAILS_REQUEST(name))
  },[dispatch, name])

  return <PokemonDetailsPageLayout
    name={info.name}
    price={info.price}
    id={info.id}
    image={info.image}
    handleAddPokemon={handleAddPokemon}
    abilities={info.abilities}
    stats={info.stats}
    isLoading={isLoading}
  />
};

export default PokemonDetailsPageContainer;

