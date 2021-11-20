import styles from './styles.module.scss';

import PropTypes from "prop-types"
import CustomPagination from "../../../../commonComponents/customPagination";

import PokemonCard from "../../../../components/PokemonCard";
import List from "../../../../commonComponents/list";

import { CircularProgress } from "@mui/material"

const PokemonPageLayout = ({ list, isLoading, handleGoToDetails, currentPage, handlePageChange, name, image, handleAddPokemon, id, addPokemonToState }) => {
  return <div>
    <div className={styles.cardArea}>
      <h1>Pokemons</h1>
      {isLoading ? (<CircularProgress />) : (
        <List items={list} renderItems={({ id, name, image, price }) => (
          <PokemonCard
            price={price}
            name={name}
            image={image}
            id={id}
            handleClick={() => handleGoToDetails(name)}
            handleAddPokemon={handleAddPokemon}
            addPokemonToState={addPokemonToState}
          />
        )}
        />
      )}
    </div>
    <div className={styles.pagination}>
      <CustomPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageCount={20}
      />
    </div>
  </div>;
};

PokemonPageLayout.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,   // .isRequired was deleted here
  }))
}

export default PokemonPageLayout;