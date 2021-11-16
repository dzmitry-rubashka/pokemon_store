import NavBar from '../navBar'

import {ShoppingCart} from '@mui/icons-material';
import {Badge} from "@mui/material";

import {useSelector} from "react-redux";

const Header = () => {
  const {isAuth} = useSelector(state => state.auth);
  return (
    <div>
      <NavBar/>
      {isAuth && <Badge badgeContent={16} color={'primary'}><ShoppingCart/></Badge>}
    </div>
  );
};

export default Header;




