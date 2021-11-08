import Header from "../header";
import styles from "./styles.module.scss"

const MainLayout = ({children}) => (
  <div>
    <Header/>
    <div>{children}</div>
  </div>
)

export default MainLayout