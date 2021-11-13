import pokeImage from '../../static/images/poke-test.jpg'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const PokemonCard = ({name, age, city}) => (
  <Card sx={{maxWidth: 345}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={pokeImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pokemon Test
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
)

export default PokemonCard