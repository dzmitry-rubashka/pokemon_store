import styles from './styles.module.scss';
import {ROUTES} from "../../../../routes/routeNames";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import * as React from "react";

const ariaLabel = {'aria-label': 'description'};

const RegistrationForm = ({formValue, onChange, onSubmit, isRegistered, error, isFormValid}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className={styles.title}>Registration Page</h1>
        <div className={styles.registration}>

          <div className={styles.text}>
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

          <div className={styles.text}>
            <span className={styles.input}>First Name</span>
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
                type={"text"}
                value={formValue.firstName}
                name='firstName'
                onChange={onChange}
                defaultValue="" inputProps={ariaLabel}
              />
            </Box>
          </div>

          <div className={styles.text}>
            <span className={styles.input}>Last Name</span>
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
                type={"text"}
                value={formValue.lastName}
                name='lastName'
                onChange={onChange}
                defaultValue="" inputProps={ariaLabel}
              />
            </Box>
          </div>

          <div className={styles.text}>
            <span className={styles.input}>Gender (*sorry, at the moment you can choose only male/female (lowercase))git</span>
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
                type={"text"}
                value={formValue.gender}
                name='gender'
                onChange={onChange}
                defaultValue="" inputProps={ariaLabel}
              />
            </Box>
          </div>

          <div className={styles.text}>
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

          <div className={styles.text}>
            <span className={styles.input}>Phone</span>
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
                type={"number"}
                value={formValue.phone}
                name='phone'
                onChange={onChange}
                defaultValue="" inputProps={ariaLabel}
              />
            </Box>
          </div>
        </div>

        {error && <div className={styles.error}> {error}</div>}

        {isRegistered ?
          <div className={styles.successCreate}>
            <p>Your account has been successfully created</p>
            <Link to={ROUTES.HOME} className={styles.link}>
              <Button style={{backgroundColor: '#53258d', color: '#FFFFFF'}}>Back To Login Page</Button>
            </Link>
          </div>:
          <div className={styles.registration}>
            <div>
              <Button disabled={!isFormValid} type="submit" style={{backgroundColor: '#53258d', color: '#FFFFFF', marginBottom: '15px'}}>Register</Button>
            </div>
            <Link to={ROUTES.HOME} className={styles.link}>
              <Button style={{backgroundColor: '#53258d', color: '#FFFFFF'}}>Back To Login Page</Button>
            </Link>
          </div>

        }
      </form>
    </div>
  );
};

export default RegistrationForm;


