import {useSelector} from "react-redux";
import {useMemo} from "react";
import {Link} from 'react-router-dom';
import {Button} from "@mui/material";

import styles from './styles.module.scss';

import {NAV_TYPE_NAMES, NAV_CONFIG} from "./config";

import {useLogout} from "../../hooks";
import * as React from "react";

const NavBar = () => {
  const {isAuth} = useSelector(state => state.auth);

  const handleLogout = useLogout()

  const navItems = useMemo(() => {
    const navType = isAuth ? NAV_TYPE_NAMES.PRIVATE : NAV_TYPE_NAMES.PUBLIC;

    return NAV_CONFIG[navType];
  }, [isAuth])

  return <div className={styles.buttons}>
    {navItems.map(({label, path}) =>
      <Link key={path} to={path} className={styles.link}>
        <Button style={{backgroundColor: '#354D9BD3', color: '#FFFFFF', margin: '5px'}}>{label}</Button>
      </Link>
    )}
    {isAuth && <Button onClick={handleLogout} style={{backgroundColor: '#354D9BD3', color: '#FFFFFF'}}>Log Out</Button>}
  </div>;
};

export default NavBar;
