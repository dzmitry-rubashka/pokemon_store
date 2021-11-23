import styles from "./styles.module.scss"
import {CircularProgress} from "@mui/material"
import Button from "@mui/material/Button";
import * as React from "react";
import {useSelector} from "react-redux";

import life from '../../../../static/images/life.png';
import attack from '../../../../static/images/attack.png';
import defense from '../../../../static/images/defense.png';
import specialAttack from '../../../../static/images/special-attack.png';
import specialDefense from '../../../../static/images/special-defense.png';
import speed from '../../../../static/images/speed.png';


const PokemonDetailsPageLayout = ({name, price, image, handleAddPokemon, abilities, stats, isLoading}
) => {

    const {itemsList} = useSelector(state => state.cart);
    const isPokemonAddedToCard = (name) => {
        return itemsList.find(pokemon => pokemon.name === name)
    }

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
                    {stat.title === 'hp' ?
                      <div >
                          <span>{<img src={life} alt={"life"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                    {stat.title === 'attack' ?
                      <div >
                          <span>{<img src={attack} alt={"attack"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                    {stat.title === 'defense' ?
                      <div >
                          <span>{<img src={defense} alt={"defense"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                    {stat.title === 'special-attack' ?
                      <div >
                          <span>{<img src={specialAttack} alt={"specialAttack"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                    {stat.title === 'special-defense' ?
                      <div >
                          <span>{<img src={specialDefense} alt={"specialDefense"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                    {stat.title === 'speed' ?
                      <div >
                          <span>{<img src={speed} alt={"speed"} className={styles.pic}/> }</span>
                          <span className={styles.titleNew}>{stat.title} - {stat.value}</span>
                      </div>
                      : null}
                </div>
              ))}
              </h2>
              <div className={styles.button}>
                  {isPokemonAddedToCard(name) ? <div className={styles.added}>Already In Cart</div>:
                    <Button style={{backgroundColor: '#02524c', color: '#FFFFFF', marginBottom: '15px'}} onClick={handleAddPokemon}>Add To Cart</Button>
                    }
              </div>
          </div>
        )}
    </div>

}



export default PokemonDetailsPageLayout


