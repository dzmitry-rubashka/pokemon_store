import * as React from 'react';

import {ROUTES} from "../../../../routes/routeNames";

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import {Link} from "react-router-dom";

import styles from './styles.module.scss';

const ariaLabel = {'aria-label': 'description'};

const LoginForm = ({formValue, onChange, onSubmit, error, isFormValid}) => {
  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
      <h1 className={styles.title}>Login Page</h1>
      <div className={styles.login}>
        <div>
          <span className={styles.input}>Email</span>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              required
              type={"email"}
              value={formValue.email}
              name='email'
              onChange={onChange}
              defaultValue="" inputProps={ariaLabel}
            />
          </Box>
        </div>

        <div>
          <span className={styles.input}>Password</span>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              required
              type={"password"}
              value={formValue.password}
              name='password'
              onChange={onChange}
              defaultValue="" inputProps={ariaLabel}
            />
          </Box>
        </div>

        {error && <div className={styles.error}> {error}</div>}

        <Button variant="outlined" size="small" type="submit" disabled={!isFormValid}>Login</Button>

        <div className={styles.text}>Don't have an account?</div>

        <Link to={ROUTES.SING_UP} className={styles.link}>
          <Button variant="outlined" size="small">Sign Up</Button>
        </Link>

      </div>
    </form>
  );
};

export default LoginForm;


