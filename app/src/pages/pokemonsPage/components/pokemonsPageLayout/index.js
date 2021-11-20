import styles from './styles.module.scss';

import PropTypes from "prop-types"
import CustomPagination from "../../../../commonComponents/customPagination";

import PokemonCard from "../../../../components/PokemonCard";
import List from "../../../../commonComponents/list";

import { CircularProgress } from "@mui/material"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import * as React from "react";

const PokemonPageLayout = ({handleGoToDetails,
                             id,
                             list,
                             isLoading,
                             currentPage,
                             handlePageChange,
                             name,
                             image,
                             handleAddPokemon,
                             addPokemonToState }
) => {
  return <div>
    <div className={styles.cardArea}>
      <h1 className={styles.title}>Store</h1>
      <div className={styles.wrapper}>

        {isLoading ? (<CircularProgress />) : (
          list.map((item) => (
              <Card sx={{ width: 250 }} className={styles.cardArea}>
                <CardContent className={styles.card}>
                  <div className={styles.name}>
                    {item.name}
                  </div>
                  <div className={styles.price}>
                    Price - {item.price}
                  </div>
                  <Typography>
                    {<img src={item.image}/>}
                  </Typography>
                </CardContent>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <Button size="small" color="primary" onClick={() => handleGoToDetails(item.name)} style={{backgroundColor: '#70917BFF', color: '#FFFFFF'}}>Check Details</Button>
                  </div>
                  <div className={styles.button}>
                    <Button size="small" color="primary" onClick={() => {
                      addPokemonToState(item.name)
                    }} style={{backgroundColor: '#70917BFF', color: '#FFFFFF'}}>Add to cart</Button>
                  </div>
                </div>
              </Card>
            ))

        )}
      </div>
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