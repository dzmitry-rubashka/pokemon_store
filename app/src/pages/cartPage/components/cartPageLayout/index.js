import styles from './styles.module.scss';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const CartPageLayout = (
  {
    isLoading,
    totalPrice,
    itemsList,
    handleIncrement,
    handleDecrement,
    handleAddPokemon,
    handleDeletePokemon,
  }
) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardArea}>
        {itemsList.map((item) => (
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
            <CardActions className={styles.card}>
              <div>
                <Button onClick={() => handleDecrement(item)} size="small"> <RemoveCircleOutlineIcon fontSize={"large"} /></Button>
              </div>
              <div>{item.quantity}</div>
              <div>
                <Button onClick={() => handleIncrement(item)} size="small"> <AddCircleOutlineIcon fontSize={"large"}/></Button>
              </div>
            </CardActions>
            <CardContent className={styles.card}>
              <Button variant="outlined" color="error" onClick={() => handleDeletePokemon(item.id)} >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CartPageLayout;
