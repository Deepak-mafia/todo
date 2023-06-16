import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import { store } from './src/store';
import Home1 from './src/Home1';


let persistor = persistStore(store)
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home1 />
      </PersistGate>
    </Provider>

  );
}

export default App;
