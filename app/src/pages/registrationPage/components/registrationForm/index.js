import styles from './styles.module.scss';
import {ROUTES} from "../../../../routes/routeNames";
import {Link} from "react-router-dom";

const RegistrationForm = ({formValue, onChange, onSubmit, isRegistered}) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className={styles}>Registration Page</h1>

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
        <span>First Name</span>
        <input required
          type={"text"}
          value={formValue.firstName}
          name='firstName'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Last Name</span>
        <input required
          type={"text"}
          value={formValue.lastName}
          name='lastName'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Gender</span>
        <input required
          type={"text"}
          value={formValue.gender}
          name='gender'
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

      <div>
        <span>Phone</span>
        <input required
          type={"number"}
          value={formValue.phone}
          name='phone'
          onChange={onChange}
        />
      </div>

      <button role="submit">Register</button>

      {isRegistered ?
        <div>
        <p>Your account has been successfully created</p>
        <Link to={ROUTES.HOME}>
          <button>Go To Homepage</button>
        </Link>
      </div>:
        null}

    </form>

  );
};

export default RegistrationForm;
