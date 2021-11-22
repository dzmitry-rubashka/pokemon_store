import styles from "./styles.module.scss"
import {CircularProgress} from "@mui/material"
import Button from "@mui/material/Button";
import * as React from "react";

const PokemonDetailsPageLayout = ({name, price, image, handleAddPokemon, abilities, stats, isLoading}
) => {
    return <div className={styles.circular}>
        {isLoading ? (<CircularProgress />) : (
          <div>
              <h2 className={styles.name}>{name}</h2>
              <h2 className={styles.price}>Price - {price}</h2>
              <h2 className={styles.img}><img src={image}/></h2>
              <h2 className={styles.mainWord}>Abilities</h2>
              <h2 className={styles.description}>{abilities?.map((ability) => (
                <div>
                    <h3 className={styles.title}>{ability.title}</h3>
                    <h4 className={styles.description}>{ability.description}</h4>
                </div>
              ))}
              </h2>
              <h2 className={styles.mainWord}>Statistics</h2>
              <h2 className={styles.description}>{stats?.map((stat) => (
                <div>
                    <h3 className={styles.title}>{stat.title}</h3>
                    <h4 className={styles.description}>{stat.value}</h4>
                </div>
              ))}
              </h2>
              <div className={styles.button}>
                  <Button style={{backgroundColor: '#02524c', color: '#FFFFFF', marginBottom: '15px'}} onClick={handleAddPokemon}>Add To Cart</Button>
              </div>
          </div>

        )}

    </div>

}

export default PokemonDetailsPageLayout


