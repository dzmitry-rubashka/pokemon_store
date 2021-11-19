import NavBar from '../navBar'

import styles from './styles.module.scss';

import {ShoppingCart} from '@mui/icons-material';
import {Badge} from "@mui/material";

import {useSelector} from "react-redux";

const Header = () => {
  const {isAuth} = useSelector(state => state.auth);
  return (
    <div className={styles.background}>
      <NavBar/>
      {isAuth && <Badge badgeContent={16} color={'primary'}><ShoppingCart/></Badge>}
    </div>
  );
};

export default Header;




