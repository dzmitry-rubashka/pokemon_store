import {ROUTES} from "../../../../routes/routeNames";

import {Link} from "react-router-dom";

import styles from './styles.module.scss';


const LoginForm = ({formValue, onChange, onSubmit, error}) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className={styles}>Home Page (Login Page)</h1>
      <div>
        <span>Email</span>
        <input required
          type={"email"}
          value={formValue.email}
          name='email'
          onChange={onChange}
        />
      </div>
      <div>
        <span>Password</span>
        <input required
          type={"password"}
          value={formValue.password}
          name='password'
          onChange={onChange}
        />
      </div>

      {error && <div> {error}</div>}

      {<button role="submit">Login</button>               /*<button >Login</button> ??????????*/}

      <div>Don't have an account?</div>
      <Link to={ROUTES.SING_UP}>
        <button>Sign Up</button>
      </Link>
    </form>
  );
};

export default LoginForm;


