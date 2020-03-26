import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './store/store';
import { imageSaga } from './store/sagas/image';
import { ContentWithRouter } from './content';

export class App extends React.Component {
  public render() {
    const store = configureStore();
    store.runSaga(imageSaga);

    return (
      <BrowserRouter>
        <Provider store={store}>
          <ContentWithRouter />
        </Provider>
      </BrowserRouter>
    );
  }
}
