import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import CounterComponent from './src/Components/CounterComponent';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

export default App;
