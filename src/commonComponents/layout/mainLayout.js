import Header from "../header";

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default MainLayout;
