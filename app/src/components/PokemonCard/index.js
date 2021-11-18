import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const PokemonCard = ({handleClick, name, image, price, handleAddPokemon, id}) => (
  <Card sx={{maxWidth: 345}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="pokemon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <p>Price - {price}</p>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={handleClick}>Full Info</Button>
      <Button size="small" color="primary" onClick={handleAddPokemon}>Add to cart (doesnt work111)</Button>
    </CardActions>
  </Card>
)

export default PokemonCard