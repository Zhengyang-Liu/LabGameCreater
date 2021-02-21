import './App.css';

import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Main from './components/Main';
import { ConfigureStore } from './redux/ConfigureStore';

export const store = ConfigureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Main />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
