import styles from './styles.module.scss';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <div>
      {itemsList.map((item) => (
        <Card sx={{ maxWidth: 350 }} className={styles.cardArea}>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>

  );
};

export default CartPageLayout;
