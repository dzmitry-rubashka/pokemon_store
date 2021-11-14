import styles from "./styles.module.scss"

const PokemonDetailsPageLayout = ({name, price, id, image}) => (
  <div>
    <h2>My name is - {name}</h2>
    <h2>My price is - {price}</h2>
    <h2>My ID is - {id}</h2>
    <h2><img src={image}/></h2>
  </div>
)

export default PokemonDetailsPageLayout