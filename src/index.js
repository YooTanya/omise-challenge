import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store';
import App from './App';
import GlobalStyle from './styles/GlobalStyle'

render(<Provider store={store}> <GlobalStyle /><App /></Provider>,
  document.getElementById('root'),
);
