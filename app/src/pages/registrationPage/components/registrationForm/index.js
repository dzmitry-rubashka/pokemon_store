import styles from './styles.module.scss';

const RegistrationForm = ({formValue, onChange, onSubmit}) => {
  return (
    <form>
      <h1 className={styles}>Registration Page</h1>

      <div>
        <span>Email</span>
        <input
          type={"email"}
          value={formValue.email}
          name='email'
          onChange={onChange}
        />
      </div>

      <div>
        <span>First Name</span>
        <input
          type={"text"}
          value={formValue.firstName}
          name='firstName'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Last Name</span>
        <input
          type={"text"}
          value={formValue.lastName}
          name='lastName'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Gender</span>
        <input
          type={"text"}
          value={formValue.gender}
          name='gender'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Password</span>
        <input
          type={"password"}
          value={formValue.password}
          name='password'
          onChange={onChange}
        />
      </div>

      <div>
        <span>Phone</span>
        <input
          type={"number"}
          value={formValue.phone}
          name='phone'
          onChange={onChange}
        />
      </div>

      <button role="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
