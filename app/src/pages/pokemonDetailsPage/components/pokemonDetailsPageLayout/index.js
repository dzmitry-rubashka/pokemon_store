import styles from "./styles.module.scss"
import {CircularProgress} from "@mui/material"

const PokemonDetailsPageLayout = ({name, price, id, image, handleAddPokemon}) => (
  <div>
    <h2>My name is - {name}</h2>
    <h2>My price is - {price}</h2>
    <h2>My ID is - {id}</h2>
    <h2><img src={image}/></h2>
    <button onClick={handleAddPokemon}>
      Add to cart (doesnt work)
    </button>
  </div>
)

export default PokemonDetailsPageLayout
