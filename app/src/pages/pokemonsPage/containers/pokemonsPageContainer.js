import PokemonPageLayout from "../components/pokemonsPageLayout";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect} from "react";
import {CHANGE_PAGE, GET_POKEMONS_REQUEST} from '../actions'
import {useHistory} from "react-router-dom";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {list, isLoading, error, currentPage} = useSelector(state => state.pokemonsPage)

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/pokemon/${pokemonName}`);
  },[]);

  const handlePageChange = useCallback((page) => {
    dispatch(CHANGE_PAGE(page));
  },[dispatch])

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage))
  },[currentPage]);
  return <PokemonPageLayout
    list={list}
    isLoading={isLoading}
    handleGoToDetails={handleGoToDetails}
    handlePageChange={handlePageChange}
    currentPage={currentPage}
  />;
};

export default PokemonPageContainer;