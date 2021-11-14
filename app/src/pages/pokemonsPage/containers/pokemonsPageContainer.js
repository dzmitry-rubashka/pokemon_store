import PokemonPageLayout from "../components/pokemonsPageLayout";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect} from "react";
import {CHANGE_PAGE, GET_POKEMONS_REQUEST} from '../actions'
import {useHistory} from "react-router-dom";

import {useParams} from 'react-router-dom';

const PokemonPageContainer = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.pokemonDetails)
  const {name} = useParams();
  const history = useHistory();

  const {list, isLoading, error, currentPage} = useSelector(state => state.pokemonsPage)

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/pokemons/${pokemonName}`);
  },[]);

  const handlePageChange = useCallback((page) => {
    dispatch(CHANGE_PAGE(page));
  },[dispatch])

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage))
  },[dispatch, currentPage, name]);

  return <PokemonPageLayout
    price={info.price}
    name={info.name}
    image={info.image}
    list={list}
    isLoading={isLoading}
    handleGoToDetails={handleGoToDetails}
    handlePageChange={handlePageChange}
    currentPage={currentPage}
  />;
};

export default PokemonPageContainer;


//было
// import PokemonPageLayout from "../components/pokemonsPageLayout";
// import {useDispatch, useSelector} from 'react-redux'
// import {useCallback, useEffect} from "react";
// import {CHANGE_PAGE, GET_POKEMONS_REQUEST} from '../actions'
// import {useHistory} from "react-router-dom";
//
// const PokemonPageContainer = () => {
//   const dispatch = useDispatch();
//
//   const history = useHistory();
//
//   const {list, isLoading, error, currentPage} = useSelector(state => state.pokemonsPage)
//
//   const handleGoToDetails = useCallback((pokemonName) => {
//     history.push(`/pokemons/${pokemonName}`);
//   },[]);
//
//   const handlePageChange = useCallback((page) => {
//     dispatch(CHANGE_PAGE(page));
//   },[dispatch])
//
//   useEffect(() => {
//     dispatch(GET_POKEMONS_REQUEST(currentPage))
//   },[currentPage]);
//   return <PokemonPageLayout
//     list={list}
//     isLoading={isLoading}
//     handleGoToDetails={handleGoToDetails}
//     handlePageChange={handlePageChange}
//     currentPage={currentPage}
//   />;
// };
//
// export default PokemonPageContainer;