import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react-native';
import { store } from 'store/index';

import TransactionProgressView from './TransactionProgressView';

test('render correctly', () => {
  const component = (
    <Provider store={store}>
      <TransactionProgressView />
    </Provider>
  );
  render(component);
});
