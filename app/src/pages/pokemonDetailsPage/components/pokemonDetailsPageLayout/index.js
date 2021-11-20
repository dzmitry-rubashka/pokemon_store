import styles from "./styles.module.scss"
import {CircularProgress} from "@mui/material"
import Button from "@mui/material/Button";
import * as React from "react";

const PokemonDetailsPageLayout = ({name, price, image, handleAddPokemon, abilities}) => (
  <div>
    <h2 className={styles.name}>{name}</h2>
    <h2 className={styles.price}>Price - {price}</h2>
    <h2 className={styles.img}><img src={image}/></h2>
    <h2 className={styles.description}>{abilities?.map((ability) => (
        <h3>{ability.title}</h3>,
        <h4>{ability.description}</h4>
    ))}
    </h2>
    <div className={styles.button}>
      <Button style={{backgroundColor: '#02524c', color: '#FFFFFF'}} onClick={handleAddPokemon}>Add To Cart</Button>
    </div>
  </div>
)

export default PokemonDetailsPageLayout
