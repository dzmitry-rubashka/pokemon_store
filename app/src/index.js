import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import Routes from "./routes/routes";
import MainLayout from "./commonComponents/layout/mainLayout";
import {configureStore} from "./store/configureStore";

const store = configureStore(devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Provider>
    </PersistGate>
  </BrowserRouter>,
  document.getElementById('root')
);
