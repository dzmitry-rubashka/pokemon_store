import NavBar from '../navBar'

import styles from './styles.module.scss';

import {ShoppingCart} from '@mui/icons-material';
import {Badge} from "@mui/material";

import {useSelector} from "react-redux";

const Header = () => {
  const {isAuth} = useSelector(state => state.auth);
  return (
    <div>
      <NavBar/>
      {isAuth &&
      <div className={styles.cart}>
        <Badge badgeContent={16} color={'primary'} className={styles.badge}><ShoppingCart/></Badge>
      </div>
      }
    </div>
  );
};

export default Header;




