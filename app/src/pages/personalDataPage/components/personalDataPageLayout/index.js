import styles from "./styles.module.scss"

const PersonalDataPageLayout = ({firstName, lastName, gender, email, phone}) => (
  <div className={styles.info}>
      <h1 className={styles.title}>Personal Information</h1>
    <h2>First Name - {firstName}</h2>
    <h2>Last Name - {lastName}</h2>
    <h2>Email - {email}</h2>
    <h2>Gender - {gender}</h2>
    <h2>Phone - {phone}</h2>
  </div>
)

export default PersonalDataPageLayout
