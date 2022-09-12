import * as React from "react";

import styles from "./styles.module.scss";

import PropTypes from "prop-types";
import CustomPagination from "../../../../commonComponents/customPagination";

import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const PokemonPageLayout = ({
  handleGoToDetails,
  list,
  isLoading,
  currentPage,
  handlePageChange,
  handleAddPokemonToState,
}) => {
  const { itemsList } = useSelector((state) => state.cart);
  const isPokemonAddedToCard = (name) => {
    return itemsList.find((pokemon) => pokemon.name === name);
  };

  return (
    <div>
      <div className={styles.cardArea}>
        <h1 className={styles.title}>Store</h1>
        <div className={styles.wrapper}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            list.map((item) => (
              <Card sx={{ width: 250 }} className={styles.cardArea}>
                <CardContent className={styles.card}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.price}>Price - {item.price}</div>
                  <Typography className={styles.image}>
                    {<img alt={"pokemon"} src={item.image} />}
                  </Typography>
                </CardContent>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleGoToDetails(item.name)}
                      style={{ backgroundColor: "#70917BFF", color: "#FFFFFF" }}
                    >
                      Check Details
                    </Button>
                  </div>
                  <div className={styles.button}>
                    {isPokemonAddedToCard(item.name) ? (
                      <div className={styles.added}>Already In Cart</div>
                    ) : (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          handleAddPokemonToState(item.name);
                        }}
                        style={{ backgroundColor: "#afb26d", color: "#FFFFFF" }}
                      >
                        Add to cart
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
      {isLoading ? null : (
        <div className={styles.pagination}>
          <CustomPagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pageCount={20}
          />
        </div>
      )}
    </div>
  );
};

PokemonPageLayout.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string, // .isRequired was deleted here
    })
  ),
};

export default PokemonPageLayout;
