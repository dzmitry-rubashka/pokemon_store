import {useSelector} from "react-redux";
import {useMemo} from "react";
import {Link} from 'react-router-dom';

import styles from './styles.module.scss';

import {NAV_TYPE_NAMES, NAV_CONFIG} from "./config";

import {useLogout} from "../../hooks";

const NavBar = () => {
  const {isAuth} = useSelector(state => state.auth);

  const handleLogout = useLogout()

  const navItems = useMemo(() => {
    const navType = isAuth ? NAV_TYPE_NAMES.PRIVATE : NAV_TYPE_NAMES.PUBLIC;

    return NAV_CONFIG[navType];
  }, [isAuth])

  return <div className={styles.background}>
    {navItems.map(({label, path}) =>
      <Link key={path} to={path}>
        <button>{label}</button>
      </Link>
    )}
    {isAuth && <button onClick={handleLogout}>Log Out</button>}
  </div>;
};

export default NavBar;
