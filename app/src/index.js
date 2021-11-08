import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from 'react-redux'




import Routes from "./routes/routes";
import MainLayout from "./commonComponents/layout/mainLayout";

ReactDOM.render(
  <BrowserRouter>
    <MainLayout>
      <Routes />
    </MainLayout>
  </BrowserRouter>,
  document.getElementById('root')
);
