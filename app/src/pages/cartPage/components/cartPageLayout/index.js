import styles from './styles.module.scss';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import PokemonCard from "../../../../components/PokemonCard";

const CartPageLayout = (
  {
    isLoading,
    totalPrice,
    itemsList,
    handleIncrement,
    handleDecrement,
    handleAddPokemon,
    handleDeletePokemon
  }
) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <div className={styles.cardArea}>
      {itemsList.map((item) => (
        <Card sx={{ maxWidth: 300 }} className={styles.cardArea}>
          <CardContent className={styles.card}>
            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom >
              {item.name}
            </Typography>
            <Typography>
              {<img src={item.image}/>}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleDecrement(item)} size="small"> <RemoveCircleOutlineIcon fontSize={"large"} /></Button>
            <div>{item.quantity}</div>
            <Button onClick={() => handleIncrement(item)} size="small"> <AddCircleOutlineIcon fontSize={"large"}/></Button>
          </CardActions>
        </Card>
      ))}
    </div>

  );
};

export default CartPageLayout;
