import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";

import {GET_POKEMON_DETAILS_REQUEST} from '../actions';

import PokemonDetailsPageLayout from "../components/pokemonDetailsPageLayout";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const {info} = useSelector(state => state.pokemonDetails)
  const {name} = useParams();

  useEffect(()=> {
    dispatch(GET_POKEMON_DETAILS_REQUEST(name))
  },[dispatch, name])

  return <PokemonDetailsPageLayout
    name={info.name}
    price={info.price}
    id={info.id}
    image={info.image}
  />
};

export default PokemonDetailsPageContainer;

