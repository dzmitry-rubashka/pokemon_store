import styles from './styles.module.scss';

import PropTypes from "prop-types"
import CustomPagination from "../../../../commonComponents/customPagination";

import PokemonCard from "../../../../components/PokemonCard";
import List from "../../../../commonComponents/list";

import {CircularProgress} from "@mui/material"

const PokemonPageLayout = ({list, isLoading, handleGoToDetails, currentPage, handlePageChange}) => {
  return <div>
    <div className={styles.cardArea}>
      <h1>Pokemons</h1>
      {isLoading ? (<CircularProgress/> ): (
        <List items={list} renderItems={({id, name, url}) => (
          <PokemonCard
            key={id}
            name={name}
            city={url}
            handleClick={() => handleGoToDetails(name)}
          />
        )}
        />
      )}
    </div>}
    <CustomPagination
      currentPage={currentPage}
      onPageChange={handlePageChange}
      pageCount={3}
    />
  </div>;
};

PokemonPageLayout.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string,   //   .isRequired was deleted here
  }))
}

export default PokemonPageLayout;